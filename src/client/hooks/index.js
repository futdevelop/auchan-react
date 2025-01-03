export const formatEntries = data =>
  data.Journal?.map(journal => ({
    journalID: journal.JournalID?.[0] || null,
    description: journal.Description?.[0] || null,
    transactions:
      journal.Transaction?.map(transaction => ({
        transactionID: transaction.TransactionID?.[0] || null,
        period: transaction.Period?.[0] || null,
        transactionDate: transaction.TransactionDate?.[0] || null,
        description: transaction.Description?.[0] || null,
        lines: transaction.Lines?.map(line => ({
          accountID: line.AccountID?.[0] || null,
          debitAmount: parseFloat(line.DebitAmount?.[0]) || 0,
          creditAmount: parseFloat(line.CreditAmount?.[0]) || 0,
        })),
      })) || [],
  })) || []

  export const formatAccounts = (data) => {
    const accounts = data.MasterFiles[0].GeneralLedgerAccounts[0].Account;
    if (!Array.isArray(accounts)) {
      console.error('Invalid data structure:', data);
      return [];
    }
    return accounts.map(account => ({
      id: account?.AccountID?.[0] || null,
      description: account?.AccountDescription?.[0] || null,
      closingCreditBalance: account?.ClosingCreditBalance[0] || null,
      closingDebitBalance: account?.ClosingDebitBalance[0] || null,
      openingCreditBalance: account?.OpeningCreditBalance[0] || null,
      openingDebitBalance: account?.OpeningDebitBalance[0] || null
    }));
  };
  
