import Button from "../atomic/Button";

const PaymentMethod = () => {
  return (
    <div>
      <div className="bg-white max-w-lg rounded-lg p-5 my-10 py-7 shadow-lg border border-gray-600">
        <h2 className="font-semibold text-[#383838] mb-3">Deposit Money</h2>

        <div>
          <label for="method" class="block mb-2 text-gray-700">
            Select Payment Method
          </label>
          <select
            id="method"
            className="border border-gray-300 w-full p-2 rounded-lg *:text-gray-500"
          >
            <option value="">Choose payment method</option>
            <option value="paystack">Paystack</option>
            <option value="paypal">Paypall</option>
            <option value="mastercard">Mastercard</option>
          </select>
        </div>

        <div className="mt-5 flex gap-5">
          <Button variant="danger">Cancel</Button>
          <Button variant="primary">Deposit Now</Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
