var Console = {
  settings: {
    file: null,
    active: false,
    date: String(new Date()),
    encoding: 'UTF8'
  },

  log: function() {
    if (this.settings.file === null) {
      this.settings.file = new File(Folder.desktop + '/log_' + this.settings.date.replace(/ |:|\+|\//gi, '_') + '.log');
      this.settings.file.encoding = this.settings.encoding;
    }

    this.settings.file.open(this.settings.file.exists ? 'a' : 'w', 'TEXT', '????');

    if (!this.settings.active) {
      this.settings.active = true;
      this.settings.file.writeln(' ');
      this.settings.file.writeln('////// LOG: ' + this.settings.date + ' //////');
    }

    this.settings.file.writeln(Array.prototype.slice.call(arguments, 0).join(', '));
    this.settings.file.close();
  }
}
