import readline from "readline"; //es6

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const DataService = () => {

  rl.question("Welcome to DataService, Enter your name: ", (userName) => {
    console.log(`\nWelcome ${userName}, here are our deals:`);
    console.log("1. 10 shilling - 100MB");
    console.log("2. 15 shilling - 500MB");
    console.log("3. 100 shilling - 1GB");
    console.log("4. 150 shilling - 2GB");
    console.log("5. 100 shilling - 10GB\n");

    rl.question("Enter the number of the bundle you want to buy (1-5): ", (bundleChoice) => {
      let bundleMessage: string; //declare variable

      switch (bundleChoice) {
        case "1":
          bundleMessage = `Congrats ${userName}, you have received 100MB for 24hrs`;
          break;
        case "2":
          bundleMessage = `Congrats ${userName}, you have received 500MB for 24hrs`;
          break;
        case "3":
          bundleMessage = `Congrats ${userName}, you have received 1GB for 24hrs`;
          break;
        case "4":
          bundleMessage = `Congrats ${userName}, you have received 2GB for 24hrs`;
          break;
        case "5":
          bundleMessage = `Congrats ${userName}, you have received 10GB for 24hrs`;
          break;
        default:
          bundleMessage = "Invalid choice. Please select a number between 1 and 5.";
      }

      console.log("\n" + bundleMessage);
      rl.close(); // Close the readline interface
    });
  });
};

DataService();

export default DataService;
