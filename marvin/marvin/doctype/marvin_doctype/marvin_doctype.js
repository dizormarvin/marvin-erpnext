// Copyright (c) 2026, Marvin and contributors
// For license information, please see license.txt

frappe.ui.form.on("Marvin Doctype", {
	refresh(frm) {
        frappe.throw("tesst");
        
	},

    data_1(frm) {
        console.log('marvin')
    },
});
