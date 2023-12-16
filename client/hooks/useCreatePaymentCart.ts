import { useState } from "react";

import { PaymentCardProps } from "../interfaces/paymentCard";
import request from "../config/request";

interface UseCreatePaymentCardResult {
  createPaymentCard: (paymentCard: PaymentCardProps) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const useCreatePaymentCard = (): UseCreatePaymentCardResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createPaymentCard = async (paymentCard: PaymentCardProps) => {
    try {
      setLoading(true);
      await request.post("/cards", paymentCard);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { createPaymentCard, loading, error };
};

export default useCreatePaymentCard;
