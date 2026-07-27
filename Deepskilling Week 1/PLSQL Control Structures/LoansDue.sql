DECLARE
  CURSOR c_due_loans IS
    SELECT c.first_name, c.last_name, l.loan_id, l.due_date
    FROM customers c
    JOIN loans l ON c.customer_id = l.customer_id
    WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
  FOR r_due IN c_due_loans LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || r_due.first_name || ' ' || r_due.last_name || 
                         ', your loan (ID: ' || r_due.loan_id || 
                         ') is due on ' || TO_CHAR(r_due.due_date, 'YYYY-MM-DD') || '.');
  END LOOP;
END;
