export const fakeTimestamp = (data) => {
  const day = 1000 * 60 * 60 * 24;

  const result = data.map((item) => {
    const randomDay = Math.floor(Math.random() * 30);
    return {
      ...item,
      createdAt: new Date(Date.now() - randomDay * day).toDateString(),
    };
  });

  return result;
};

export const getTotal = (todos, users = []) => {
  const result = todos.reduce((acc, todo) => {
    const { userId, completed } = todo;

    if (!acc[userId]) {
      const user = users.find((u) => u.id === userId);
      acc[userId] = {
        name: user ? user.username : `User ${userId}`,
        completed: 0,
        pending: 0,
      };
    }

    completed ? acc[userId].completed++ : acc[userId].pending++;
    return acc;
  }, {});

  return Object.values(result);
};

export const getVisiblePages = (page, totalPages) => {
  if (totalPages <= 5) {
    return [...Array(totalPages)].map((_, i) => i + 1);
  }

  if (page <= 3) {
    return [1, 2, 3, 4, 5, totalPages];
  }

  if (page >= totalPages - 2) {
    return [
      1,
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [1, page - 1, page, page + 1, page + 2, totalPages];
};


