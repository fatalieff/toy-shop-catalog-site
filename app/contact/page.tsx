'use client';

import { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Box, Paper, Typography, Link as MuiLink } from '@mui/material';
import { subscribeContactInfo } from '../lib/contactService';

const defaultContact = {
  phone: '+998 90 000 0000',
  email: 'contact@toyworld.com',
  address: 'Tashkent, Uzbekistan',
  instagram: '',
  facebook: '',
  x: '',
};

type ContactInfo = typeof defaultContact;

export default function Page() {
  const [contact, setContact] = useState<ContactInfo>(defaultContact);

  useEffect(() => {
    const unsubscribe = subscribeContactInfo((value: any) => {
      if (!value) return;
      setContact((prev) => ({ ...prev, ...value }));
    });

    return () => unsubscribe();
  }, []);

  return (
    <Box component="section" sx={{ py: 10, px: { xs: 3, md: 10 }, bgcolor: '#FFF0F0' }}>
      <Paper
        elevation={0}
        sx={{
          maxWidth: 900,
          mx: 'auto',
          p: { xs: 4, md: 6 },
          bgcolor: '#ffffffcc',
          borderRadius: 4,
          border: '1px solid #f1d4d4',
          boxShadow: '0 30px 80px rgba(92,61,61,0.12)',
        }}
      >
        <Typography variant="overline" sx={{ color: '#C05B51', letterSpacing: '0.32em', mb: 2, display: 'block' }}>
          Contact
        </Typography>
        <Typography variant="h3" component="h1" sx={{ fontFamily: 'LuckiestGuy', color: '#5C3D3D', mb: 2 }}>
          Get in Touch
        </Typography>
        <Typography variant="body1" sx={{ color: '#8A6F6F', mb: 4, maxWidth: 720 }}>
          You can reach us through the channels below.
        </Typography>

        <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0, 1fr))' } }}>
          <Paper elevation={0} sx={{ p: 3, border: '1px solid #F1D4D4', bgcolor: '#FFF5F5' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#C05B51', mb: 1 }}>
              <FaPhone />
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#5C3D3D' }}>
                Phone
              </Typography>
            </Box>
            <MuiLink href={`tel:${contact.phone}`} underline="none" sx={{ color: '#5C3D3D', '&:hover': { color: '#C05B51' } }}>
              {contact.phone}
            </MuiLink>
          </Paper>

          <Paper elevation={0} sx={{ p: 3, border: '1px solid #F1D4D4', bgcolor: '#FFF5F5' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#C05B51', mb: 1 }}>
              <FaEnvelope />
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#5C3D3D' }}>
                Email
              </Typography>
            </Box>
            <MuiLink href={`mailto:${contact.email}`} underline="none" sx={{ color: '#5C3D3D', '&:hover': { color: '#C05B51' } }}>
              {contact.email}
            </MuiLink>
          </Paper>

          <Paper elevation={0} sx={{ p: 3, border: '1px solid #F1D4D4', bgcolor: '#FFF5F5' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#C05B51', mb: 1 }}>
              <FaMapMarkerAlt />
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#5C3D3D' }}>
                Address
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#5C3D3D' }}>
              {contact.address}
            </Typography>
          </Paper>
        </Box>

        {/* Social media links */}
        {(contact.instagram || contact.facebook || contact.x) && (
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 3 }}>
            {contact.instagram && (
              <MuiLink
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  color: '#5C3D3D',
                  textDecoration: 'none',
                  '&:hover': { color: '#C05B51' },
                }}
              >
                <FaInstagram size={32} />
                <Typography variant="caption">Instagram</Typography>
              </MuiLink>
            )}
            {contact.facebook && (
              <MuiLink
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  color: '#5C3D3D',
                  textDecoration: 'none',
                  '&:hover': { color: '#C05B51' },
                }}
              >
                <FaFacebook size={32} />
                <Typography variant="caption">Facebook</Typography>
              </MuiLink>
            )}
            {contact.x && (
              <MuiLink
                href={contact.x}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  color: '#5C3D3D',
                  textDecoration: 'none',
                  '&:hover': { color: '#C05B51' },
                }}
              >
                <FaTwitter size={32} />
                <Typography variant="caption">X</Typography>
              </MuiLink>
            )}
          </Box>
        )}
      </Paper>
    </Box>
  );
}
