# PLAN — งานที่กำลังทำอยู่

- อัปเดตล่าสุด: 2026-07-10
- ชุด L (token plate ใน index.html) — **ยกเลิกแล้ว** ผู้ใช้ตัดสินใจ revert index.html กลับแบบเดิมทั้งหมด (2026-07-10)

---

## ชุด M — ปรับวิธีเล่า case study (v3: Decision-led + Specimen-led)

**ที่มา:** ผู้ใช้ไม่ชอบวิธีเล่าปัจจุบัน อ้างอิงบทวิเคราะห์ 3 พอร์ต (ANCHOR / Glowtastic / Mile 20) → ผ่านการรีวิว 3 รอบกับ codex ได้ข้อสรุปว่า template เหล่านั้นเป็น category error สำหรับ evidence ที่เรามี (ไม่มี outcome data, ไม่มี research, ไม่มี anecdote ที่จำได้) — โหมดที่ถูกคือ **D+E: artifact → constraint → decision → tradeoff** ซึ่งใกล้ของเดิม จึงเป็นการ sharpen ไม่ใช่รื้อ

**กติกา copy ที่ตกลงแล้ว (ใช้กับทุกหน้า):**
1. ห้าม claim พฤติกรรมทีม/ผู้ใช้ที่ยืนยันไม่ได้ ("dev never had to ask", "conversations got shorter") — พูดถึงคุณสมบัติของ artifact แทน
2. ห้าม universal prediction แต่งตัวเป็น fact ("every import would create unmatched records") — เล่ากลไก ("data could enter before matching rules existed")
3. ห้ามระบุ duration ที่จำไม่ได้ — ใช้ "mid-build"
4. "Shipped" = delivery fact ไม่ใช่ outcome fact — 1M+ users ของ 3BB เป็น credibility context ห้ามใช้เป็นหลักฐานว่า design ถูก
5. ตัวเลข effort (frames/nodes) อยู่ได้แค่ชั้นใน (plates, ตาราง inventory) ไม่ขึ้น headline
6. Named "Findings" แบบ Mile 20 ห้ามใช้ — เรามี audit observations ไม่ใช่ research findings
7. ฉากผู้ใช้แต่งเหตุการณ์ (hook scene) ห้ามใช้

**สถานะการทำจริง:**

| ขั้น | สถานะ |
|---|---|
| cdp.html — implement v3 (intro สั้น, scope row แทน stat row, glance แทน spine, รูป workspace ขึ้นต้นหน้า + caption "Recreated", ย่อหน้า cost, กวาด unverifiable claims รวม meta description) | ✅ DONE 2026-07-10 — ผ่าน final gate ของ codex (แก้ must-fix ครบ 3 กลุ่ม + nice-to-fix) |
| 3bb-member.html — glance แทน spine, labels เป็น Decision 01/02, กวาด claims 3 จุด (relearned nothing / explain twice / impossible to confuse), stat row เก็บ (ตัวเลขเป็น delivery/scope fact) | ✅ DONE 2026-07-10 — ผู้ใช้อนุมัติแผนแล้วสั่งดำเนินการ |
| counter-service-pos.html — glance แทน spine, Fig 1 (wide-screen) ขึ้นเป็น preview ต้นหน้า, "costs" → "risks", stat row เก็บ | ✅ DONE 2026-07-10 |
| `.glance` + `.figs.one` ย้ายเข้า shared style.css (chrome-level, ใช้ทุกหน้า case) — ลบ local ออกจาก cdp.html | ✅ DONE 2026-07-10 |
| `_case-template.html` — อัปเดต template: spine → glance (พร้อม claim rules ใน comment), เพิ่ม solution-preview block (optional), label เป็น "Decision NN · verb phrase" | ✅ DONE 2026-07-10 |
| ผู้ใช้เปิดดูทั้ง 3 หน้าจริงในเบราว์เซอร์ ตัดสินว่าวิธีเล่าใหม่ผ่านไหม | ✅ ผู้ใช้ตรวจแล้ว "โอเคเลย" 2026-07-10 |
| cdp "The situation" — `.inv` (CSS columns:2 คอลัมน์เหลื่อม/เส้นไม่ตรง) เปลี่ยนเป็นตาราง `.sit` (Rule in memory / Where the cost landed, local ใน cdp.html), copy ยุบเหลือข้อละประโยค, ย่อหน้าปิดย่อลง, ลบ `.inv` ออกจาก style.css + อัปเดต comment ใน template | ✅ DONE 2026-07-10 |
| cdp Plate 07 (RFM) — เติมเป็น specimen: ตาราง 7 กลุ่ม × Recency/Frequency/Monetary (ค่าเป็นคำ HIGH/MID/LOW ไล่น้ำหนักสี ink→faint), บรรทัดนิยาม 3 แกน, ชุดสีใหม่เป็นบันไดเดียว (ส้มเข้ม→อ่อน = คุณค่า, แดง warn = ความเสี่ยง, เทา = lost — เลิกใช้น้ำเงินสุ่ม), label "Score status" + แถบ THE RULE | ✅ DONE 2026-07-10 |
| plate ติดกันดูเป็นก้อน — ตาม codex review: `.page-case .plate + .plate{margin-top:var(--story-lg)}` (mobile: --story-md) ใน style.css; ไม่รวม plate, ไม่ใส่ประโยคเชื่อม — ยกเว้นจุดเดียว: 3bb P01→02 ใส่ประโยคเชื่อม "Those three states became the routing rule..." แล้ว (ผู้ใช้อนุมัติ) | ✅ DONE 2026-07-10 |
| รูป figure 3bb — recreate `fig-1-1.png` (3 จอ: home / package / login-error) + `fig-2-1.png` (scope map แทนรูป banking slide ที่ผิด) เป็น HTML render แบบเดียวกับ cdp fig-1-1, caption เปลี่ยนเป็น "Recreated", layout เปลี่ยนเป็น `.figs one`, honesty note ครอบคลุม figures | ✅ DONE 2026-07-10 — pos ไม่ต้องทำ (ผู้ใช้ยืนยัน) |

**หมายเหตุค้างตัดสิน:** hand notes (ตัวเขียน Caveat เช่น "every undocumented edge case becomes a QA ticket", "friction paid once — not the support queue") เป็น claim เชิงวาทศิลป์ — ตัดสินใจเก็บไว้เพราะเป็น marginalia ไม่ใช่ evidence แต่ผู้ใช้ override ได้
