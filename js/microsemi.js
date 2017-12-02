var album = ["<img src=\"img/Microsemi/CSAC.png\"><p>CSAC</p>",
			"<img src=\"img/Microsemi/MAC.png\"><p>MAC</p>",
			"<img src=\"img/Microsemi/5071A.png\"><p>5071A Cs Atomic Clock</p>",
			"<img src=\"img/Microsemi/5125A.png\"><p>Phase Noise Test Set</p>",
			]

var MicrosemiSlideIndex = 1;
MicrosemiSlides(MicrosemiSlideIndex);
function MicrosemiSlides(n) {
  var i;
  if (n > album.length) {MicrosemiSlideIndex = 1}
  if (n < 1) {MicrosemiSlideIndex = album.length}
  document.getElementById("MicrosemiSlider").innerHTML = album[MicrosemiSlideIndex-1];
}

function task1() {
	var description = "Designed and assembled a high frequency synthesizer by implementing a cascaded PLL with an output power level controller.\
    It was optimized to minimize phase noise and the results were over 10 times better than commercially available components.\
    The enclosure was created using interchangeable RF shielded rack mount units to minimize EMI effects.\
    Was also responsible for the design of the internal layout, front panel components, and the final build and assembly.<br><br>\
    <img src=\"img\\Work_Related\\Synth\\Iso.png\" width=50%>"
    document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<strong>High Frequency Synthesizer</strong>";
};

function task2() {
	var description = "Wrote a script that, given a stepped input (such as a step and hold temperature ramp), the outputs (transient responses) at the 'hold' regions\
	were captured. Additionally, the transient responses are averaged and captured for the instances where you might need it, like a temperature compensation algorithm.\
	Made generic for any type of input; temperature, voltage, current, etc.<br>\
	<a href=\"https://github.com/JoshWilkins2013/JupyterNotebooks/tree/master/SteppedInputResponse\" target=\"_blank\">Repository</a><br><br>\
	<a href=\"Storage\\SteppedInputResponse.pdf\" target=\"_blank\"><button type=\"submit\">PDF</button></a>"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<strong>Step Response Analysis</strong>";
};

function task3() {
	var description = "An attempt at reducing the quantization error due to signal sampling.\
	The typical SNR due to quantization error is about 6 dB per bit.\
	By preconditioning the signal, this error can be reduced to improve the SNR to about 10 dB per bit!\
	Presented the results to the engineering team in a \"lunch and learn\" meeting.<br>\
	<a href=\"https://github.com/JoshWilkins2013/JupyterNotebooks/tree/master/QuantizationError\" target=\"_blank\">Repository</a><br><br>\
	<a href=\"Storage\\QuantizationError.pdf\" target=\"_blank\"><button type=\"submit\">PDF</button></a>"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<strong>Quantization Error</strong>";
};

function task4() {
	var description = "Utilized the programmable real-time units on the Beaglebone Black to interface with the AD9912 DDS and a DAC via SPI communication.\
	The DAC was implemented in a programmable, low bandwidth, digital PI filter for the phase noise measurement system.\
	The DDS was implemented in the 12 GH synthesizer as a phase noise injection device for testing purposes.<br>\
	<a href=\"https://github.com/JoshWilkins2013/BBB\" target=\"_blank\">Repository</a><br><br>"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<strong>Beaglebone Black</strong>";
};

function task6() {
	var description = "Created an adjustable output power stabalizer cirucit by utilizing an envelope detector.\
	Additionally maximized the output power level through the selection of components<br>\
	<a href=\"https://github.com/JoshWilkins2013/JupyterNotebooks\" target=\"_blank\">Repository</a><br><br>\
	<a href=\"Storage\\OutputPowerController.pdf\" target=\"_blank\"><button type=\"submit\">PDF</button></a>"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<strong>Output Power Level Controller</strong>";
};

function task10() {
	var description = "Converted the Matlab script found \
	<a href=\"https://www.mathworks.com/matlabcentral/fileexchange/8844-phase-noise?focused=5065243&tab=function&requestedDomain=www.mathworks.com\" target=\"_blank\">here</a> \
	into python to inject phase noise into any model. Useful for phase noise degradation testing and helps define its effect on allan deviation.<br>\
	<a href=\"https://github.com/JoshWilkins2013/AddPhaseNoise\" target=\"_blank\">Repository</a>"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<strong>Phase Noise Injection</strong>";
};


/*
function task5() {
	var description = "MAC-D cold start up analysis (Oven control loop) -- voltage and current measurements\
	TEC control loop (Laser temp control) analysis/fixing (TEC low temp noise problem)"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<strong>MAC-D</strong>";
};

function task7() {
	var description = "DDS Spur finder"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<strong>DDS Spur Finder</strong>";
};

function task8() {
	var description = "Close In phase noise -- NLTL vs other comb gen tech, Synth phase noise meas, better than instruments"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<strong>Alternative Phase Noise Measurement Methods</strong>";
};

function task9() {
	var description = "Temperature Dependency Testing -- Divider circuit, BPF characterization"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<strong>Temperature Dependency Testing</strong>";
};
*/