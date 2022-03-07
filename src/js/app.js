require('./bootstrap')

$(document).ready(() => {
    let inputAmount = $('#input-amount'),
        inputTea = $('#input-tea'),
        inputNumberFee = $('#input-number-fee'),
        tagFeeValue = $('#tag-fee-value'),
        tagTotalValue = $('#tag-total-value'),
        tagTem = $('#tag-tem'),
        calculateButton = $("#calculate-button"),
        buttonIncrease = $('#button-increase'),
        buttonDecrease = $('#button-decrease')

    let elementsMap = $.map([inputAmount, inputTea, inputNumberFee], el => {
        return el.get()
    })

    /**
     * Asignación de evento de escritura para eliminar clase "is-invalid" y "feedback".
     */
    $(elementsMap).keyup(e => {
        if (!$(e.currentTarget).hasClass('is-invalid')) {
            return
        }
        $(e.currentTarget).removeClass('is-invalid')
        $(e.currentTarget).next('span').remove()
    })

    /**
     * Asignación de evento para aumentar valor de dataNumberFee.
     */
    buttonDecrease.click(() => {
        if (inputNumberFee.val() <= 2) {
            return
        }
        inputNumberFee.val(Number(inputNumberFee.val()) - 1)
    })

    /**
     * Asignación de evento para disminuir valor de dataNumberFee.
     */
    buttonIncrease.click(() => {
        if (inputNumberFee.val() >= 36) {
            return
        }
        inputNumberFee.val(Number(inputNumberFee.val()) + 1)
    })

    /**
     * Asignación de evento para mantener valor de dataNumberFee en rango.
     */
    inputNumberFee.change(() => {
        if (inputNumberFee.val() > 36) {
            inputNumberFee.val('36')
        } else if (inputNumberFee.val() < 2) {
            inputNumberFee.val('2')
        }
    })

    /**
     * Asignación de evento para calcular resultados.
     */
    calculateButton.click(() => {
        if (inputAmount.val() === '') {
            inputAmount.addClass('is-invalid')
            inputAmount.after(`<span class="invalid-feedback" role="alert"><strong>Debes llenar este campo.</strong></span>`)
            return
        } else if (inputTea.val() === '') {
            inputTea.addClass('is-invalid')
            inputTea.after(`<span class="invalid-feedback" role="alert"><strong>Debes llenar este campo.</strong></span>`)
            return
        }

        let valueTea = Number(inputTea.val()) / 100

        let valueTem = (1 + valueTea) ** (1 / 12) - 1

        valueTem = Math.round(valueTem * Math.pow(10, 4)) / Math.pow(10, 4)

        let valueAmount = Number(inputAmount.val()),
            valueNumberFee = Number(inputNumberFee.val())

        let valueCuota = (valueAmount * (valueTem * (1 + valueTem) ** valueNumberFee)) / (((1 + valueTem) ** valueNumberFee) - 1)

        valueCuota = Math.round(valueCuota * Math.pow(10, 2)) / Math.pow(10, 2)

        let valueTotal = Math.round((valueCuota * valueNumberFee) * Math.pow(10, 2)) / Math.pow(10, 2)

        tagFeeValue.text('S/ ' + valueCuota)
        tagTem.text(valueTem * 100 + ' %')
        tagTotalValue.text('S/ ' + valueTotal)
    })
})
