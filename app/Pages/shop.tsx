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

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([]);
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
          return {
            id,
            title: v.title ?? "",
            price: v.price ?? 0,
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
      <div className="shop-hero">
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
        <Box className="shop-empty-state">
          <Typography className="poppins" sx={{ color: "#5c3d3d", fontWeight: 700 }}>
            No products found.
          </Typography>
          <Typography className="poppins" sx={{ color: "#8a6b6b", mt: 1 }}>
            Check back soon for fresh toys and surprises.
          </Typography>
        </Box>
      ) : (
        <div className="shop-grid">
          {products.map((p) => (
            <div key={p.id} className="shop-card-wrapper">
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
                    <Typography className="shop-card-price">${p.price}</Typography>
                    <span className="shop-card-badge">Add to bag</span>
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
