import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to serve reset data
  app.get('/api/resets', (req, res) => {
    // In a real application, this data would come from a database
    // For this project, we'll use static data from the client
    const resetsData = [
      {
        id: 'water-reset',
        title: 'Water Reset',
        description: 'Drink a full glass of water slowly, focusing on the sensation of coolness. This activates your parasympathetic nervous system.',
        icon: 'water',
        color: 'blue',
        type: 'micro',
      },
      {
        id: 'grounding',
        title: 'Grounding 5-4-3-2-1',
        description: 'Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, and 1 you taste to quickly anchor yourself in the present.',
        icon: 'tree',
        color: 'sage',
        type: 'micro',
      },
      // Additional resets would be listed here
    ];
    
    res.json(resetsData);
  });

  const httpServer = createServer(app);

  return httpServer;
}
