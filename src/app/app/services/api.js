export const sendMessage = async (message) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    id: Date.now(),
    text: `This is a mock response to: "${message}"`,
    sender: 'ai',
    timestamp: new Date().toISOString()
  };
};

export const fetchHistory = async () => {
  return [
    { id: 1, title: 'Previous Chat 1', timestamp: '2024-03-20T10:00:00Z' },
    { id: 2, title: 'Previous Chat 2', timestamp: '2024-03-19T15:30:00Z' },
  ];
};
