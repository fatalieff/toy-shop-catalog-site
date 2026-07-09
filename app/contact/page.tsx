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
type ContactSnapshot = Partial<ContactInfo> | null;

export default function Page() {
  const [contact, setContact] = useState<ContactInfo>(defaultContact);

  useEffect(() => {
    const unsubscribe = subscribeContactInfo((value: ContactSnapshot) => {
      if (!value) return;
      setContact((prev) => ({ ...prev, ...value }));
    });

    return () => unsubscribe();
  }, []);

  return (
    <Box component="section" sx={{ py: { xs: 3, sm: 5, md: 8 }, px: { xs: 2, sm: 3, md: 8 }, bgcolor: 'transparent' }}>
      <Paper
        elevation={0}
        className="page-hero-float"
        sx={{
          maxWidth: 1000,
          mx: 'auto',
          p: { xs: 2.5, sm: 4, md: 6 },
          background: 'linear-gradient(135deg, #ffffff 0%, #fff7f7 100%)',
          borderRadius: 5,
          border: '1px solid #f5dede',
          boxShadow: '0 25px 70px rgba(92,61,61,0.14)',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: { xs: 2.5, md: 4 }, mb: { xs: 3, md: 4 } }}>
          <Box sx={{ maxWidth: 560 }}>
            <Typography variant="overline" sx={{ color: '#C05B51', letterSpacing: '0.32em', mb: 1.5, display: 'block', fontWeight: 700 }}>
              Contact
            </Typography>
            <Typography variant="h3" component="h1" className="page-stagger-1" sx={{ fontFamily: 'LuckiestGuy', color: '#5C3D3D', mb: 2, fontSize: { xs: '2rem', md: '2.6rem' } }}>
              Let’s stay in touch
            </Typography>
            <Typography variant="body1" className="page-stagger-2" sx={{ color: '#8A6F6F', lineHeight: 1.8, fontSize: '1rem' }}>
              We would love to hear from you. Reach out with questions, feedback, or anything lovely you have in mind.
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: '100%', md: 'auto' },
              minWidth: { md: 240 },
              p: { xs: 2, sm: 2.5 },
              borderRadius: 3,
              bgcolor: '#FFF5F5',
              border: '1px solid #f6d8d8',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7)',
            }}
          >
            <Typography variant="subtitle2" sx={{ color: '#C05B51', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', mb: 1 }}>
              Need help?
            </Typography>
            <Typography variant="body2" sx={{ color: '#5C3D3D', lineHeight: 1.7 }}>
              Our team is happy to assist with any toy or store questions.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gap: { xs: 2, md: 3 }, gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0, 1fr))' } }}>
          <Paper className="transform transition-transform duration-200 hover:scale-105 page-stagger-1" elevation={0} sx={{ p: { xs: 2.25, sm: 3 }, border: '1px solid #F1D4D4', bgcolor: '#FFF9F9', borderRadius: 3, boxShadow: '0 12px 30px rgba(92,61,61,0.06)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#C05B51', mb: 1.2 }}>
              <FaPhone />
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#5C3D3D' }}>
                Phone
              </Typography>
            </Box>
            <MuiLink href={`tel:${contact.phone}`} underline="none" sx={{ color: '#5C3D3D', fontWeight: 600, '&:hover': { color: '#C05B51' } }}>
              {contact.phone}
            </MuiLink>
          </Paper>

          <Paper className="transform transition-transform duration-200 hover:scale-105 page-stagger-2" elevation={0} sx={{ p: { xs: 2.25, sm: 3 }, border: '1px solid #F1D4D4', bgcolor: '#FFF9F9', borderRadius: 3, boxShadow: '0 12px 30px rgba(92,61,61,0.06)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#C05B51', mb: 1.2 }}>
              <FaEnvelope />
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#5C3D3D' }}>
                Email
              </Typography>
            </Box>
            <MuiLink href={`mailto:${contact.email}`} underline="none" sx={{ color: '#5C3D3D', fontWeight: 600, '&:hover': { color: '#C05B51' } }}>
              {contact.email}
            </MuiLink>
          </Paper>

          <Paper className="transform transition-transform duration-200 hover:scale-105 page-stagger-3" elevation={0} sx={{ p: { xs: 2.25, sm: 3 }, border: '1px solid #F1D4D4', bgcolor: '#FFF9F9', borderRadius: 3, boxShadow: '0 12px 30px rgba(92,61,61,0.06)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#C05B51', mb: 1.2 }}>
              <FaMapMarkerAlt />
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#5C3D3D' }}>
                Address
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#5C3D3D', lineHeight: 1.7 }}>
              {contact.address}
            </Typography>
          </Paper>
        </Box>

        {(contact.instagram || contact.facebook || contact.x) && (
          <Box sx={{ mt: { xs: 3, md: 4 }, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
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
                  px: 2.2,
                  py: 1.3,
                  borderRadius: 999,
                  color: '#5C3D3D',
                  textDecoration: 'none',
                  bgcolor: '#FFF5F5',
                  border: '1px solid #f5dede',
                  '&:hover': { color: '#C05B51', transform: 'translateY(-2px)' },
                }}
              >
                <FaInstagram size={24} />
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
                  px: 2.2,
                  py: 1.3,
                  borderRadius: 999,
                  color: '#5C3D3D',
                  textDecoration: 'none',
                  bgcolor: '#FFF5F5',
                  border: '1px solid #f5dede',
                  '&:hover': { color: '#C05B51', transform: 'translateY(-2px)' },
                }}
              >
                <FaFacebook size={24} />
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
                  px: 2.2,
                  py: 1.3,
                  borderRadius: 999,
                  color: '#5C3D3D',
                  textDecoration: 'none',
                  bgcolor: '#FFF5F5',
                  border: '1px solid #f5dede',
                  '&:hover': { color: '#C05B51', transform: 'translateY(-2px)' },
                }}
              >
                <FaTwitter size={24} />
                <Typography variant="caption">X</Typography>
              </MuiLink>
            )}
          </Box>
        )}
      </Paper>
    </Box>
  );
}
