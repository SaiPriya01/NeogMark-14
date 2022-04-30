const initialPrice = document.querySelector('#initial-price');
const stocksQuant = document.querySelector('#stocks-quant');
const currentPrice = document.querySelector('#current-price');
const outputEl = document.querySelector('.output');
const submitBtn = document.querySelector('#submit');

function calculateProfitOrLoss(initial, quant, current) {
    if (initial > current) {
        var loss = (initial - current) * quant;
        var lossPercent = (loss / initial) * 100;
        showMessage("👀 whoops! you have a loss of " + loss + " and loss percentage is " + lossPercent.toFixed(2) + " %");
        showOutputStyling("rgb(255, 11, 11)", "rgba(255, 11, 11, 0.205)");
    } else if (current > initial) {
        var profit = (current - initial) * quant;
        var profitPercent = (profit / initial) * 100;
        showMessage("🚀 hurrah! you have a profit of " + profit + " and profit percentage is " + profitPercent.toFixed(2) + " %");
        showOutputStyling("rgba(0, 228, 95, 0.87)", "rgba(0, 228, 95, 0.192)");
    } else if (initial == "" || quant == "" || current == "") {
        showMessage('🙏 please enter all the fields');
        showOutputStyling("rgb(255, 11, 11)", "rgba(255, 11, 11, 0.205)");
    } else {
        showMessage("😌 no pain no gain, no gain no pain");
        showOutputStyling("rgb(113, 0, 241)", "rgba(112, 0, 241, 0.15)");
    }
}

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuant.value);
    var cp = Number(currentPrice.value);
    calculateProfitOrLoss(ip, qty, cp);
}

function showMessage(msg) {
    outputEl.innerText = msg;
}

function showOutputStyling(colorValue, bgValue) {
    outputEl.style.color = colorValue;
    outputEl.style.backgroundColor = bgValue;
    outputEl.style.padding = "0.7rem 3rem";
    outputEl.style.borderRadius = "5rem";
}
submitBtn.addEventListener('click', submitHandler);