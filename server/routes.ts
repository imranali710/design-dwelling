import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const contactData = contactSchema.parse(req.body);
      
      // Store the contact form submission
      const contact = await storage.createContact(contactData);
      
      // Return success response
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false,
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      
      console.error("Error saving contact form:", error);
      res.status(500).json({ 
        success: false,
        message: "There was an error processing your request. Please try again." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
