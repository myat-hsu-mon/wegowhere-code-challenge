import { useState, useEffect } from "react";

import { PaymentCardProps } from "../interfaces/paymentCard";
import request from "../config/request";

const usePaymentCards = () => {
  const [paymentCards, setPaymentCards] = useState<PaymentCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaymentCards = async () => {
      try {
        const response = await request.get("/cards");
        setPaymentCards(response.data.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentCards();
  }, []);

  return { paymentCards, loading, error };
};

export default usePaymentCards;
