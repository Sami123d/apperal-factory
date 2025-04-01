document.addEventListener("DOMContentLoaded", function() {
      const titles = ["Buy Affordable Wholesale Clothing | wholesale Clothing Vendors", "1 new message"];
      let currentIndex = 0;

      setInterval(() => {
        document.title = titles[currentIndex];
        currentIndex = (currentIndex + 1) % titles.length; // Switch between 0 and 1
      }, 500); // Change title every 3 seconds
    });