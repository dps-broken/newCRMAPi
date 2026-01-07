export default function handler(req, res) {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }


  const songs = {
  "data": {
    "2026-01-06T00:00:00Z": [
      {
        "icon": "ph-note-pencil",
        "time": "2026-01-06T05:12:21.538Z",
        "action": "Remark Added",
        "action_val": "Pranjal Kumar Dwivedi",
        "summary_title": "Description",
        "summary_value": "Pranjal added a remark regarding cricket practice follow-up",
        "detailed_data": {}
      },
      {
        "icon": "ph-note-minus",
        "time": "2026-01-06T06:45:10.121Z",
        "action": "Remark Removed",
        "action_val": "Pranjal Kumar Dwivedi",
        "summary_title": "Description",
        "summary_value": "Pranjal removed an outdated remark related to cricket practice",
        "detailed_data": {}
      },
      {
        "icon": "ph-calendar-plus",
        "time": "2026-01-06T08:30:00.000Z",
        "action": "Meeting Planned",
        "action_val": "Bhola Bhai",
        "summary_title": "Description",
        "summary_value": "Bhola Bhai planned a meeting for carrom discussion",
        "detailed_data": [
          {
            "title": "Planned At",
            "value": "2026-01-07T10:00:00Z"
          }
        ]
      },
      {
        "icon": "ph-check-square",
        "time": "2026-01-06T10:15:44.902Z",
        "action": "Todo Added",
        "action_val": "System",
        "summary_title": "Task",
        "summary_value": "Follow up with client after meeting",
        "detailed_data": {}
      }
    ],

    "2026-01-05T00:00:00Z": [
      {
        "icon": "ph-user-switch",
        "time": "2026-01-05T04:55:18.301Z",
        "action": "Inquiry Re-assigned",
        "action_val": "Ganesh Kirti",
        "detailed_data": [
          {
            "title": "Re-assigned",
            "value": "From Pranjal Kumar Dwivedi to Dharmik Bhai"
          }
        ]
      },
      {
        "icon": "ph-pencil-line",
        "time": "2026-01-05T07:20:11.876Z",
        "action": "Inquiry Modified",
        "action_val": "Minakshi Gopal",
        "addition_note": "Following fields have been modified",
        "detailed_data": [
          {
            "title": "Email",
            "value": "from abc@gmail.com to xyz@gmail.com"
          },
          {
            "title": "Budget",
            "value": "from ₹12,00,000 to ₹15,00,000"
          }
        ]
      },
      {
        "icon": "ph-check-circle",
        "time": "2026-01-05T09:40:00.000Z",
        "action": "Todo Completed",
        "action_val": "Dharmik Bhai",
        "summary_title": "Task",
        "summary_value": "Initial requirement discussion completed",
        "detailed_data": {}
      },
      {
        "icon": "ph-chat-text",
        "time": "2026-01-05T11:10:34.654Z",
        "action": "Remark Added",
        "action_val": "Minakshi Gopal",
        "summary_title": "Description",
        "summary_value": "Client is interested in premium package",
        "detailed_data": {}
      }
    ],

    "2026-01-04T00:00:00Z": [
      {
        "icon": "ph-calendar-x",
        "time": "2026-01-04T05:35:00.000Z",
        "action": "Meeting Cancelled",
        "action_val": "Dharmik Bhai",
        "detailed_data": [
          {
            "title": "Planned At",
            "value": "2026-01-04T09:00:00Z"
          },
          {
            "title": "Reason",
            "value": "Client unavailable due to medical emergency"
          }
        ]
      },
      {
        "icon": "ph-list-checks",
        "time": "2026-01-04T07:10:18.009Z",
        "action": "Todo Added",
        "action_val": "System",
        "summary_title": "Task",
        "summary_value": "Reschedule meeting with client",
        "detailed_data": {}
      },
      {
        "icon": "ph-note-pencil",
        "time": "2026-01-04T08:50:41.220Z",
        "action": "Remark Added",
        "action_val": "Pranjal Kumar Dwivedi",
        "summary_title": "Description",
        "summary_value": "Client prefers communication over WhatsApp",
        "detailed_data": {}
      },
      {
        "icon": "ph-trash",
        "time": "2026-01-04T10:05:59.777Z",
        "action": "Todo Removed",
        "action_val": "System",
        "summary_title": "Task",
        "summary_value": "Duplicate follow-up task removed",
        "detailed_data": {}
      }
    ],

    "2026-01-03T00:00:00Z": [
      {
        "icon": "ph-plus-circle",
        "time": "2026-01-03T04:25:12.432Z",
        "action": "Inquiry Added",
        "action_val": "System",
        "detailed_data": [
          {
            "title": "Assigned To",
            "value": "Minakshi Gopal (+91 84884 4559)"
          },
          {
            "title": "Source",
            "value": "Facebook"
          }
        ]
      },
      {
        "icon": "ph-chat-text",
        "time": "2026-01-03T06:10:55.889Z",
        "action": "Remark Added",
        "action_val": "Minakshi Gopal",
        "summary_title": "Description",
        "summary_value": "Lead looks promising and budget aligned",
        "detailed_data": {}
      },
      {
        "icon": "ph-calendar-plus",
        "time": "2026-01-03T08:00:00.000Z",
        "action": "Meeting Planned",
        "action_val": "Minakshi Gopal",
        "summary_title": "Description",
        "summary_value": "Introductory call scheduled with client",
        "detailed_data": [
          {
            "title": "Planned At",
            "value": "2026-01-05T09:30:00Z"
          }
        ]
      },
      {
        "icon": "ph-list-checks",
        "time": "2026-01-03T10:45:19.100Z",
        "action": "Todo Added",
        "action_val": "System",
        "summary_title": "Task",
        "summary_value": "Prepare proposal document",
        "detailed_data": {}
      }
    ],

    "2026-01-02T00:00:00Z": [
      {
        "icon": "ph-user-plus",
        "time": "2026-01-02T05:05:33.300Z",
        "action": "Inquiry Assigned",
        "action_val": "System",
        "detailed_data": [
          {
            "title": "Assigned To",
            "value": "Pranjal Kumar Dwivedi"
          }
        ]
      },
      {
        "icon": "ph-note-pencil",
        "time": "2026-01-02T06:40:00.000Z",
        "action": "Remark Added",
        "action_val": "Pranjal Kumar Dwivedi",
        "summary_title": "Description",
        "summary_value": "Initial contact established with client",
        "detailed_data": {}
      },
      {
        "icon": "ph-list-checks",
        "time": "2026-01-02T08:20:41.876Z",
        "action": "Todo Added",
        "action_val": "System",
        "summary_title": "Task",
        "summary_value": "Send company profile to client",
        "detailed_data": {}
      },
      {
        "icon": "ph-check-circle",
        "time": "2026-01-02T10:10:10.010Z",
        "action": "Todo Completed",
        "action_val": "Pranjal Kumar Dwivedi",
        "summary_title": "Task",
        "summary_value": "Company profile sent successfully",
        "detailed_data": {}
      }
    ]
  }
}
;

  res.status(200).json({ songs });
}
