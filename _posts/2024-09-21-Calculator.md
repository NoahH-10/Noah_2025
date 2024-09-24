<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
            font-family: Arial, sans-serif;
        }
        #calculator {
            border: 1px solid #333;
            padding: 20px;
            border-radius: 10px;
            background-color: #fff;
        }
        #display {
            width: 100%;
            height: 40px;
            margin-bottom: 10px;
            font-size: 24px;
            text-align: right;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            width: 50px;
            height: 50px;
            margin: 5px;
            font-size: 18px;
            cursor: pointer;
        }
        .operator, .special {
            background-color: #4CAF50; /* Green color for operators */
            color: white;
        }
        .clear {
            background-color: #f44336;
            color: white;
        }
        .equal {
            background-color: #2196F3;
            color: white;
        }
    </style>
</head>
<body>

<div id="calculator">
    <input type="text" id="display" disabled>
    <div>
        <button onclick="clearDisplay()" class="clear">C</button>
        <button onclick="appendToDisplay('(')"> ( </button>
        <button onclick="appendToDisplay(')')"> ) </button>
        <button onclick="appendToDisplay('^')" class="special"> ^ </button>
    </div>
    <div>
        <button onclick="appendToDisplay('7')">7</button>
        <button onclick="appendToDisplay('8')">8</button>
        <button onclick="appendToDisplay('9')">9</button>
        <button onclick="appendToDisplay('/')" class="special"> / </button>
    </div>
    <div>
        <button onclick="appendToDisplay('4')">4</button>
        <button onclick="appendToDisplay('5')">5</button>
        <button onclick="appendToDisplay('6')">6</button>
        <button onclick="appendToDisplay('*')" class="operator"> * </button>
    </div>
    <div>
        <button onclick="appendToDisplay('1')">1</button>
        <button onclick="appendToDisplay('2')">2</button>
        <button onclick="appendToDisplay('3')">3</button>
        <button onclick="appendToDisplay('-')" class="operator"> - </button>
    </div>
    <div>
        <button onclick="appendToDisplay('0')">0</button>
        <button onclick="appendToDisplay('+')" class="operator"> + </button>
        <button onclick="changeSign()" class="special">+/-</button>
        <button onclick="calculateResult()" class="equal">=</button>
    </div>
    <div>
        <button onclick="calculateSquareRoot()" class="special">√</button>
    </div>
</div>

<script>
    function clearDisplay() {
        document.getElementById('display').value = '';
    }

    function appendToDisplay(value) {
        document.getElementById('display').value += value;
    }

    function changeSign() {
        const display = document.getElementById('display');
        if (display.value) {
            display.value = display.value.startsWith('-') ? display.value.substring(1) : '-' + display.value;
        }
    }

    function calculateSquareRoot() {
        const display = document.getElementById('display');
        if (display.value) {
            display.value = Math.sqrt(eval(display.value)).toString();
        }
    }

    function calculateResult() {
        const display = document.getElementById('display');
        try {
            display.value = eval(display.value.replace(/\^/g, '**'));
        } catch (e) {
            display.value = 'Error';
        }
    }
</script>
