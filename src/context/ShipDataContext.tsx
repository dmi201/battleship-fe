"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { ShipData } from "../types/ship";

type ShipDataContextType = {
  shipData: ShipData | null;
  loading: boolean;
  error: string | null;
};

const ShipDataContext = createContext<ShipDataContextType | undefined>(
  undefined
);

export const ShipDataProvider = ({ children }: { children: ReactNode }) => {
  const [shipData, setShipData] = useState<ShipData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShipData = async () => {
      try {
        const response = await fetch("/api/ships");
        if (!response.ok) {
          throw new Error("Failed to fetch ship data");
        }
        const data: ShipData = await response.json();
        setShipData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred when fetching the ship data");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchShipData();
  }, []);

  return (
    <ShipDataContext.Provider value={{ shipData, loading, error }}>
      {children}
    </ShipDataContext.Provider>
  );
};

export const useShipData = () => {
  const context = useContext(ShipDataContext);
  if (!context) {
    throw new Error("useShipData must be used within a ShipDataProvider");
  }
  return context;
};
