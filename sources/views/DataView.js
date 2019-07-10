import {JetView} from "webix-jet";
import {data} from "../models/records";

export default class DataView extends JetView {
	config() {
		let datatable = {
			view: "datatable",
			localId: "datatableMainData",
			hover: "hoverLine",
			autoConfig: true,
			scrollX: false,
			select: true,
			columns: [
				{
					id: "title",
					editor: "select",
					header: ["Title", {
						content: "textFilter"
					}],
					width: 300,
					sort: "string",
					fillspace: true
				},
				{
					id: "year",
					header: ["Year", {
						content: "dateRangeFilter"
					}],
					sort: "date",
					fillspace: true
				},
				{
					id: "votes",
					header: ["Votes", {
						content: "textFilter"
					}],
					sort: "int",
					fillspace: true
				},
				{
					id: "rating",
					editor: "select",
					header: ["Rating", {
						content: "textFilter"
					}],
					sort: "int",
					fillspace: true
				},
				{
					id: "rank",
					editor: "select",
					header: ["Rank", {
						content: "selectFilter"
					}],
					sort: "int",
					fillspace: true
				},
				{
					template: "<span class='webix_icon wxi-pencil editBtn'></span>",
					width: 40
				},
				{
					template: "<span class='webix_icon wxi-trash removeBtn'></span>",
					width: 40
				}
			]
			// onClick: {
			// 	removeBtn: (el, id) => {
			// 		webix.confirm({
			// 			text: _("Do you still want to continue?"),
			// 			callback: (result) => {
			// 				if (result) {
			// 					Activity.remove(id);
			// 				}
			// 			}
			// 		});
			// 		return false;
			// 	},
			// 	editBtn: (el, id) => {
			// 		this.form.showForm(Activity.getItem(id), _("Edit"));
			// 	}
			// }

		};
		return {
			datatable
		};
	}

	init() {
		this.$$("datatableMainData").sync(data);
	}
}

