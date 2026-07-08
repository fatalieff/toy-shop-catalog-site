"use client";

import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { getDatabase } from "../lib/firebase";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";

const currencyMeta = {
  AZN: { symbol: "₼", label: "AZN" },
  USD: { symbol: "$", label: "USD" },
  EUR: { symbol: "€", label: "EUR" },
  GBP: { symbol: "£", label: "GBP" },
  TRY: { symbol: "₺", label: "TRY" },
} as const;

type CurrencyCode = keyof typeof currencyMeta;

type Product = {
  id: string;
  title: string;
  price: number;
  currency: CurrencyCode;
  imageUrl: string;
  createdAt: number;
};

function formatPrice(price: number, currency: CurrencyCode) {
  const safePrice = Number.isFinite(price) ? price : 0;
  const metadata = currencyMeta[currency] ?? currencyMeta.USD;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(safePrice);

  return `${metadata.symbol} ${formattedPrice}`;
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const productsRef = ref(db, "products");

    const unsubscribe = onValue(
      productsRef,
      (snapshot) => {
        const data = snapshot.val() as Record<string, any> | null;
        if (!data) {
          setProducts([]);
          setLoading(false);
          return;
        }

        const arr = Object.entries(data).map(([id, val]) => {
          const v = val as Record<string, any>;
          const currency = (v.currency as CurrencyCode | undefined) ?? "USD";

          return {
            id,
            title: v.title ?? "",
            price: Number(v.price) || 0,
            currency,
            imageUrl: v.imageUrl ?? "",
            createdAt: v.createdAt ? Number(v.createdAt) : 0,
          };
        });

        arr.sort((a, b) => b.createdAt - a.createdAt);
        setProducts(arr);
        setLoading(false);
      },
      (error) => {
        console.error("Realtime DB error:", error);
        setLoading(false);
      }
    );

    return () => {
      if (typeof unsubscribe === "function") unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          gap: 1.5,
        }}
      >
        <CircularProgress sx={{ color: "#ff7b9c" }} />
        <Typography className="poppins" sx={{ color: "#5c3d3d", fontWeight: 600 }}>
          Loading lovely toys...
        </Typography>
      </Box>
    );
  }

  return (
    <div className="shop-shell">
      <div className="shop-hero page-hero-float">
        <div>
          <p className="shop-kicker">Toy Collection</p>
          <h1 className="shop-title">Find a playful favorite</h1>
          <p className="shop-description">
            Bright, cozy picks for little hands and big imaginations.
          </p>
        </div>
        <div className="shop-pill">{products.length} products</div>
      </div>

      {products.length === 0 ? (
        <Box className="shop-empty-state animate__animated animate__fadeInUp">
          <Typography className="poppins" sx={{ color: "#5c3d3d", fontWeight: 700 }}>
            No products found.
          </Typography>
          <Typography className="poppins" sx={{ color: "#8a6b6b", mt: 1 }}>
            Check back soon for fresh toys and surprises.
          </Typography>
        </Box>
      ) : (
        <div className="shop-grid">
          {products.map((p, index) => (
            <div key={p.id} className={`shop-card-wrapper page-card-pop ${index % 3 === 0 ? 'page-stagger-1' : index % 3 === 1 ? 'page-stagger-2' : 'page-stagger-3'}`}>
              <Card className="shop-card" elevation={0}>
                <CardMedia
                  component="img"
                  image={p.imageUrl || "/placeholder.png"}
                  alt={p.title}
                  className="shop-card-media"
                  sx={{ height: 220, objectFit: "cover" }}
                />
                <CardContent className="shop-card-content">
                  <Typography variant="h6" className="shop-card-title">
                    {p.title}
                  </Typography>
                  <div className="shop-card-footer">
                    <div className="shop-card-price-group">
                      <Typography className="shop-card-price">
                        {currencyMeta[p.currency].symbol} {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(p.price)}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
