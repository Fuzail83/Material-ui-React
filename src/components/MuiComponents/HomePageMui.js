import React from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Badge,
  Button,
  ButtonGroup,
} from "@mui/material";
import { Mail, Add, Remove } from "@mui/icons-material";

const HomePageMui = () => {
  return (
    <Container sx={styles.container}>
      <Box sx={styles.box}>
        <Typography variant="h3" align="center" sx={styles.heading}>
          Welcome to Material-UI (MUI)
        </Typography>
        <Typography variant="body1" sx={styles.intro}>
          "MUI" stands for Material-UI. It's a popular open-source UI framework
          for React applications that implements the Material Design guidelines
          created by Google. Material Design is a design language that aims to
          provide a consistent and visually pleasing user experience across
          platforms and devices.
        </Typography>
        <Typography variant="body1" sx={styles.paragraph}>
          Material-UI provides a set of reusable components, styles, and themes
          that follow the Material Design principles. These components can be
          used to build modern and responsive user interfaces in React
          applications. Material-UI offers a wide range of components such as
          buttons, forms, navigation elements, dialogs, cards, and more.
        </Typography>
      </Box>
      <Box sx={styles.box}>
        <Paper elevation={3} sx={styles.paper}>
          <Typography variant="h5" align="center" sx={styles.featureHeading}>
            Key Features of Material-UI
          </Typography>
          <List sx={styles.featureList}>
            <ListItem>
              <ListItemText primary="Pre-built and customizable React components" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Theming to customize look and feel" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Responsive design for various screen sizes" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Consistent and professional visual style" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Emphasis on accessibility" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Includes a set of Material Design icons" />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    backgroundColor: "#f8f9fa",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  box: {
    marginBottom: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    color: "#333",
    marginBottom: "20px",
  },
  intro: {
    color: "#555",
    marginBottom: "20px",
  },
  paragraph: {
    color: "#777",
  },
  paper: {
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
  },
  featureHeading: {
    color: "#333",
    marginBottom: "20px",
  },
  featureList: {
    color: "#555",
  },
  badge: {
    marginBottom: "20px",
  },
  mailIcon: {
    fontSize: "64px",
    color: "#f50057",
  },
  buttonGroup: {
    marginTop: "20px",
  },
  button: {
    backgroundColor: "#f50057",
    color: "white",
    border: "none",
    marginRight: "10px",
  },
};

export default HomePageMui;
