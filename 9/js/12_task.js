class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	changeStyle() {
		let div = document.createElement('div');

		document.body.appendChild(div);
		div.textContent = 'Привет, мир!';
		div.style.cssText = `
			height: ${this.height}px;
			width: ${this.width}px;
			background: ${this.bg};
			font-size: ${this.fontSize};
			text-align: ${this.textAlign};
		`;
	}
}

let div = new Options(100, 150, 'red', '16px', 'center');

div.changeStyle();