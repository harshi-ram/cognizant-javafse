DECLARE
  CURSOR c_senior_loans IS
    SELECT c.customer_id, l.loan_id, l.interest_rate
    FROM customers c
    JOIN loans l ON c.customer_id = l.customer_id
    WHERE c.age > 60;
BEGIN
  FOR r_loan IN c_senior_loans LOOP
    UPDATE loans
    SET interest_rate = interest_rate - 1.0
    WHERE loan_id = r_loan.loan_id;
  END LOOP;
  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Senior citizen loan interest discounts applied successfully.');
END;
