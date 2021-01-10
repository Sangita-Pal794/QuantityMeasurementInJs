var selectedMainUnit = "length";
var firstsubUnit = "";
var secondsubUnit = "";
var baseLength, baseVolume, baseTemperature;

$(document).ready(function () {
  lengthFunc = () => {
    selectedMainUnit = "length";
    console.log(selectedMainUnit);

    $("#first").addClass("active");
    $("#second").removeClass("active");
    $("#third").removeClass("active");

    $("#inputType").show(() => {
      let value = [
        "Meter",
        "Centimeter",
        "Milimeter",
        "Kilometer",
        "Micrometer",
        "Feet",
        "Inch",
      ];
      selectOption(value, "#inputType");
    });
    $("#resultType").show(() => {
      let value = [
        "Meter",
        "Centimeter",
        "Milimeter",
        "Kilometer",
        "Micrometer",
        "Feet",
        "Inch",
      ];
      selectOption(value, "#resultType");
    });
  };
  tempFunc = () => {
    let value = ["Celcius", "Farenheit", "Kalvin"];

    selectedMainUnit = "temperature";
    console.log(selectedMainUnit);
    $("#first").removeClass("active");
    $("#second").addClass("active");
    $("#third").removeClass("active");
    $("#inputType").show(1000, () => {
      // let value = ["Celcius", "Farenheit", "Kalvin"];
      selectOption(value, "#inputType");
    });
    $("#resultType").show(() => {
      // let value = ["Celcius", "Farenheit", "Kalvin"];
      selectOption(value, "#resultType");
    });
  };

  volFunc = () => {
    selectedMainUnit = "volume";
    console.log(selectedMainUnit);

    $("#first").removeClass("active");
    $("#second").removeClass("active");
    $("#third").addClass("active");
    $("#inputType").show(1000, () => {
      let value = ["Gallon", "Liter", "MiliLiter"];
      selectOption(value, "#inputType");
    });
    $("#resultType").show(() => {
      let value = ["Gallon", "Liter", "MiliLiter"];
      selectOption(value, "#resultType");
    });
  };
  lengthFunc();
});

selectOption = (value, id) => {
  $(id).empty();
  $.each(value, function (index,value) {
    let addChoice = `<option>${value}</option>`;
    $(id).append(addChoice);
  });
};

unitConverter = (value) => {
  firstsubUnit = $("#inputType").val();
  secondsubUnit = $("#resultType").val();

  switch (selectedMainUnit) {
    case "length":
      calculateBaseLength(value, firstsubUnit);
      let out = calculateLengthOutput(secondsubUnit);
      console.log("hii" + out);
      $("#result").val(out);
      break;
    case "temperature":
      calculateBaseTemperature(value, firstsubUnit);
      let output = calculateTemperatureOutput(secondsubUnit);
      console.log("hii" + output);
      $("#result").val(output);
      break;
    case "volume":
      calculateBaseVolume(value, firstsubUnit);
      let outpu = calculateVolumeOutput(secondsubUnit);
      console.log("hii" + outpu);
      $("#result").val(outpu);
      break;
    default:
      break;
  }
};

unit1Converter = (value) => {
  firstsubUnit = $("#inputType").val();
  secondsubUnit = $("#resultType").val();

  switch (selectedMainUnit) {
    case "length":
      calculateBaseLength(value, secondsubUnit);
      let out = calculateLengthOutput(firstsubUnit);
      console.log("hii" + out);
      $("#input").val(out);
      break;
    case "temperature":
      calculateBaseTemperature(value, secondsubUnit);
      let output = calculateTemperatureOutput(firstsubUnit);
      console.log("hii" + output);
      $("#input").val(output);
      break;
    case "volume":
      calculateBaseVolume(value, secondsubUnit);
      let outpu = calculateVolumeOutput(firstsubUnit);
      console.log("hii" + outpu);
      $("#input").val(outpu);
      break;
    default:
      break;
  }
};

calculateBaseLength = (value, firstsubUnit) => {
  switch (firstsubUnit) {
    case "Meter":
      baseLength = value * 100;
      break;
    case "Centimeter":
      baseLength = value;
      break;
    case "Kilometer":
      baseLength = value * 100000;
      break;
    case "Feet":
      baseLength = value * 30.48;
      break;
    default:
      baseLength = 0;
      break;
  }
};

calculateBaseTemperature = (value, firstsubUnit) => {
  switch (firstsubUnit) {
    case "Celcius":
      baseTemperature = value * (9 / 5) + 32;
      break;
    case "Farenheit":
      baseTemperature = value;
      break;
    case "Kalvin":
      baseTemperature = (value - 273.15) * (9 / 5) + 32;
      break;
    default:
      baseTemperature = 0;
      break;
  }
};

calculateBaseVolume = (value, firstsubUnit) => {
  switch (firstsubUnit) {
    case "MiliLiter":
      baseVolume = value / 1000;
      break;
    case "Gallon":
      baseVolume = value * 3.785;
      break;
    case "Liter":
      baseVolume = value;
      break;
    default:
      baseVolume = 0;
      break;
  }
};

calculateLengthOutput = (secondsubUnit) => {
  console.log("hi" + secondsubUnit + "hello" + baseLength);

  switch (secondsubUnit) {
    case "Meter":
      return this.baseLength / 100;
    case "Centimeter":
      return this.baseLength;
    case "Kilometer":
      return this.baseLength / 100000;
    case "Feet":
      return this.baseLength / 30.48;
    default:
      return 0;
  }
};

calculateTemperatureOutput = (secondsubUnit) => {
  console.log("oy");
  switch (secondsubUnit) {
    case "Celcius":
      return (this.baseTemperature - 32) * (5 / 9);
    case "Farenheit":
      return this.baseTemperature;
    case "Kalvin":
      return (this.baseTemperature - 32) * (5 / 9) + 273.15;
    default:
      return 0;
  }
};

calculateVolumeOutput = (secondsubUnit) => {
  console.log("ot");
  switch (secondsubUnit) {
    case "MiliLiter":
      return this.baseVolume * 1000;
    case "Gallon":
      return this.baseVolume / 3.785;
    case "Liter":
      return this.baseVolume;
    default:
      return 0;
  }
};
unitConverterBySelect= () => {
  unitConverter($("#input").val());
}

unit1ConverterBySelect= () => {
  unit1Converter($("#result").val());

}