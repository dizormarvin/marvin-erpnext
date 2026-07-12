# Copyright (c) 2026, Marvin and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class MarvinDoctype(Document):
	def validate(self):
		frappe.throw('test')
