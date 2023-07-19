$(document).ready(function() {
    let totalAmount = 0;

    $("#add").click(function() {
        const expenseName = $("#expense-name").val().trim();
        const expenseAmount = parseFloat($("#amount").val().trim());

        if (expenseName === "" || isNaN(expenseAmount) || expenseAmount <= 0) {
            return;
        }

        addExpenseToTable(expenseName, expenseAmount);

        $("#expense-name").val("");
        $("#amount").val("");

        totalAmount += expenseAmount;
        updateTotalAmount();
    });

    $(document).on("click", ".delete-btn", function() {
        const row = $(this).closest("tr");
        const amount = parseFloat(row.find(".expense-amount").text());
        totalAmount -= amount;
        updateTotalAmount();
        row.remove();
    });

    function addExpenseToTable(name, amount) {
        const newRow = $("<tr>");
        newRow.append($("<td>").text(name));
        newRow.append($("<td>").text(amount.toFixed(2)).addClass("expense-amount"));
        newRow.append($("<td>").append($("<button>").text("Delete").addClass("delete-btn")));
        $("#table tbody").append(newRow);
    }

    function updateTotalAmount() {
        $("#total-amount").text(totalAmount.toFixed(2));
    }
});