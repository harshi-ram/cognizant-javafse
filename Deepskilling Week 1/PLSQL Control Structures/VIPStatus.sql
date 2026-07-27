DECLARE
  CURSOR c_customers IS
    SELECT customer_id, balance, is_vip
    FROM customers;
BEGIN
  FOR r_cust IN c_customers LOOP
    IF r_cust.balance > 10000 THEN
      UPDATE customers
      SET is_vip = 'TRUE'
      WHERE customer_id = r_cust.customer_id;
    END IF;
  END LOOP;
  COMMIT;
  DBMS_OUTPUT.PUT_LINE('VIP status updated for eligible customers.');
END;
