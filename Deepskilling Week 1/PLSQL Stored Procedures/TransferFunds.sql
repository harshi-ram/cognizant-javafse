CREATE PROCEDURE TransferFunds
    @SourceAccountID INT,
    @DestinationAccountID INT,
    @Amount DECIMAL(18, 2)
AS
BEGIN
    DECLARE @CurrentBalance DECIMAL(18, 2);

    SELECT @CurrentBalance = Balance 
    FROM Accounts 
    WHERE AccountID = @SourceAccountID;

    IF @CurrentBalance >= @Amount
    BEGIN
        BEGIN TRANSACTION;

        UPDATE Accounts 
        SET Balance = Balance - @Amount 
        WHERE AccountID = @SourceAccountID;

        UPDATE Accounts 
        SET Balance = Balance + @Amount 
        WHERE AccountID = @DestinationAccountID;

        COMMIT TRANSACTION;
    END
    ELSE
    BEGIN
        RAISERROR('Insufficient funds in the source account.', 16, 1);
    END
END;
