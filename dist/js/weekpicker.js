$(document).ready(function () {
    let period_from_config = {
        field: document.getElementById("period-dropdownFromz"),
        pickWholeWeek: true,
        showWeekNumber: true,
        format: "yyyy/WW",
        onSelect: function () {
            const val = document.getElementById("period-dropdownFromz").value;
            document.getElementById("period-dropdownFromz").value = `${val.split("/")[0]}W${val.split("/")[1]}`;
        },
    };
    let period_to_config = {
        field: document.getElementById("period-dropdownToz"),
        pickWholeWeek: true,
        showWeekNumber: true,
        format: "yyyy/WW",
        onSelect: function () {
            const val = document.getElementById("period-dropdownToz").value;
            document.getElementById("period-dropdownToz").value = `${ val.split("/")[0] }W${val.split("/")[1]}`;
        },
    };
    let picker_from = new Pikaday({
        ...period_from_config,
    });
    let picker_to = new Pikaday({
        ...period_to_config,
    });
});