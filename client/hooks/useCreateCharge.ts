import { useState, Dispatch, SetStateAction } from "react";

import { PaymentCardProps } from "../interfaces/paymentCard";
import request from "../config/request";

interface createChargeProps {
  cardId: string;
  amount: string;
  currency: string;
}

interface UseCreatePaymentCardResult {
  createCharge: (chargeInfo: createChargeProps) => Promise<void>;
  loading: boolean;
  error: string | null;
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

const useCreateCharge = (): UseCreatePaymentCardResult => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createCharge = async (chargeInfo: createChargeProps) => {
    try {
      setLoading(true);
      const response = await request.post(
        "/charges",
        JSON.stringify(chargeInfo)
      );
      setModalVisible(response.data.data?.paid);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { createCharge, loading, error, modalVisible, setModalVisible };
};

export default useCreateCharge;
