function diff(n) {
    if (n <= 19) {
      return (19 - n);
      }
    else
      {
       return (n - 19) * 3;
      }
  }
  
  console.log(diff(12));
  console.log(diff(19));
  console.log(diff(22));