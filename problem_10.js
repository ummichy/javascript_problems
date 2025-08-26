function pingPong() {
  for (let a = 1; a <= 20; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
      console.log("PingPong");
    } else if (a % 3 === 0) {
      console.log("Ping");
    } else if (a % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(a);
    }
  }
}
pingPong();
