// Find the bug or solve the errors

Game.prototype.restart = function () {
  this.clearLocalStorage();
  this.timer = setTimeout(function() {
    this.clearBoard();    // what is "this"?
  }, 0);
};
