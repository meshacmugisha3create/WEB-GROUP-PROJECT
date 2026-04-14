import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export default function Page6() {
  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <ContactSupportIcon sx={{ fontSize: 50, color: '#1a237e' }} />
        <Typography variant="h4" fontWeight="bold" gutterBottom>Help & Support</Typography>
        <Typography color="textSecondary">Common questions about the Study Group Finder</Typography>
      </Box>

      <Paper elevation={0} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <Accordion sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">How do I join a study group?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Visit the <b>View</b> page to see all active groups. Note down the location and course unit, then join your classmates at the specified venue.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">Is the data saved permanently?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes! All groups created on the <b>Create</b> page are stored in our MariaDB/JSON backend server.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">How can I remove an old group?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Authorized users can go to the <b>Admin</b> page to delete groups that are no longer active.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>

      <Box sx={{ mt: 5, textAlign: 'center', p: 3, bgcolor: '#e3f2fd', borderRadius: 3 }}>
        <Typography variant="h6" fontWeight="bold">Technical Support</Typography>
        <Typography>For BSIT project inquiries: support@ucu.ac.ug</Typography>
      </Box>
    </Container>
  );      
}