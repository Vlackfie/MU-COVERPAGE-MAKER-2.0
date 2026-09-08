// Student database parsed from provided text
const studentsDatabase = {
  "241-115-213": { name: "Tashin Islam Safat", section: "A" },
  "242-115-001": { name: "Nafisa Anjum Riana", section: "A" },
  "242-115-002": { name: "Anik Mazumder", section: "A" },
  "242-115-003": { name: "MD Raju Khan", section: "A" },
  "242-115-006": { name: "S. M. Mahidul Haque", section: "A" },
  "242-115-007": { name: "MD Yousuf ali", section: "A" },
  "242-115-008": { name: "Fabia Binte Faruk", section: "A" },
  "242-115-009": { name: "Moumita Sarkar", section: "A" },
  "242-115-010": { name: "Tanjina Rashid Esha", section: "A" },
  "242-115-011": { name: "Zahidul Hussain Riyad", section: "A" },
  "242-115-012": { name: "Mufti Faiyaz Shamim", section: "A" },
  "242-115-013": { name: "Shoumik Islam", section: "A" },
  "242-115-014": { name: "Jannatul Ferdous Jerin", section: "A" },
  "242-115-015": { name: "Rawa Yasmin chowdhury", section: "A" },
  "242-115-016": { name: "Nadia Akter", section: "A" },
  "242-115-019": { name: "MD HABIBUR RAHMAN", section: "A" },
  "242-115-020": { name: "Ankita", section: "A" },
  "242-115-021": { name: "Bishal Chandra Das", section: "A" },
  "242-115-022": { name: "Sharifa Akther moni", section: "A" },
  "242-115-026": { name: "Naima Rahman Nuha", section: "A" },
  "242-115-027": { name: "Bishal Dash Rohit", section: "A" },
  "242-115-028": { name: "Nobbendu das niloy", section: "A" },
  "242-115-029": { name: "Kishor Roy", section: "A" },
  "242-115-030": { name: "Marian Roy Chowdhury", section: "A" },
  "242-115-031": { name: "Nafisa Ahmed Neha", section: "A" },
  "242-115-032": { name: "Probal Datta", section: "A" },
  "242-115-033": { name: "AKM SHAH MAHIN", section: "A" },
  "242-115-034": { name: "Sonjoy Das", section: "A" },
  "242-115-036": { name: "Yeasmin Binte Muttakin", section: "A" },
  "242-115-038": { name: "Syed Shams Nasir", section: "A" },
  "242-115-040": { name: "Agnila Talukdar", section: "A" },
  "242-115-041": { name: "Riya Chowdhury", section: "A" },
  "242-115-042": { name: "Sukria Jahan Tamanna", section: "A" },
  "242-115-043": { name: "Fariha Islam Mim", section: "A" },
  "242-115-044": { name: "Md Mahtab Ahmed Mahin", section: "A" },
  "242-115-045": { name: "Md Hifjur Rahman", section: "A" },
  "242-115-046": { name: "Shahriar siyam", section: "A" },
  "242-115-048": { name: "Smita Paramita Shreya", section: "A" },
  "242-115-049": { name: "Srijon Dey", section: "A" },
  "242-115-050": { name: "Mahbuba Ahmed Jerin", section: "A" },
  "232-115-051": { name: "Prosenjit Debnath", section: "B" },
  "232-115-325": { name: "Muzaddid Hossain", section: "B" },
  "242-115-051": { name: "Syeda Maimuna Ali", section: "B" },
  "242-115-052": { name: "Khadija Haque Zara", section: "B" },
  "242-115-053": { name: "Anthora Sarker Priya", section: "B" },
  "242-115-054": { name: "Md Tanvir Mahmud", section: "B" },
  "242-115-055": { name: "Muradul Arefin Mahi", section: "B" },
  "242-115-056": { name: "Moumita Dhar", section: "B" },
  "242-115-057": { name: "Fabiha Montaha Mahi", section: "B" },
  "242-115-058": { name: "Aurnobi Saha", section: "B" },
  "242-115-059": { name: "Asma Akther Mim", section: "B" },
  "242-115-061": { name: "Nahin Sultana Samia", section: "B" },
  "242-115-062": { name: "Mst. Suriya Islam Sinthiya", section: "B" },
  "242-115-063": { name: "Spriha Datta", section: "B" },
  "242-115-064": { name: "Mahfujur Rahman", section: "B" },
  "242-115-065": { name: "Hafsa Alam Chowdhury", section: "B" },
  "242-115-066": { name: "Syeda Tahrina Khanam", section: "B" },
  "242-115-068": { name: "Anamika Debi", section: "B" },
  "242-115-069": { name: "Sumon Ahmed", section: "B" },
  "242-115-070": { name: "Md. Tawhid Shahriar Shahed", section: "B" },
  "242-115-071": { name: "Shaon Sarker", section: "B" },
  "242-115-078": { name: "Masuma Akther", section: "B" },
  "242-115-079": { name: "Sadikul Hossain", section: "B" },
  "242-115-080": { name: "Sumayyah Rahman", section: "B" },
  "242-115-083": { name: "Wahaj Rashid Arian", section: "B" },
  "242-115-084": { name: "Nafisa Anjum Chowdhury", section: "B" },
  "242-115-086": { name: "Jeoda Pathan Pammi", section: "B" },
  "242-115-087": { name: "Touhidul Islam", section: "B" },
  "242-115-088": { name: "Md Saber Hussain Dipu", section: "B" },
  "242-115-090": { name: "Maisha Begum", section: "B" },
  "242-115-091": { name: "Sheikh Nishat Jarin Noha", section: "B" },
  "242-115-092": { name: "Fatema Yeasmin Mili", section: "B" },
  "242-115-093": { name: "Seemanto Kumar Dash", section: "B" },
  "242-115-094": { name: "Tapon Sarkar", section: "B" },
  "242-115-096": { name: "Jannatul Ferdous Manthasha", section: "B" },
  "242-115-097": { name: "Sadia Sultana", section: "B" },
  "242-115-098": { name: "Brishti Rani Das", section: "B" },
  "242-115-099": { name: "Purbak Talukder Dony", section: "B" },
  "242-115-100": { name: "Nobonita Das Pushon", section: "B" },
  "242-115-085": { name: "Sumaiya Jannat Shima", section: "C" },
  "242-115-101": { name: "Debojoty Roy Thirtho", section: "C" },
  "242-115-103": { name: "Jannatul Ferdous Jannat", section: "C" },
  "242-115-107": { name: "Maksura Rahman Zim", section: "C" },
  "242-115-111": { name: "Miftahur Rahman Omi", section: "C" },
  "242-115-113": { name: "Sojon Sarker", section: "C" },
  "242-115-114": { name: "Srishty Talukder Mimi", section: "C" },
  "242-115-115": { name: "Muntaha Akram Chowdhury", section: "C" },
  "242-115-116": { name: "Muhammad Farhanul Islam", section: "C" },
  "242-115-117": { name: "Nobonita Das Tonny", section: "C" },
  "242-115-120": { name: "Tonny Shree Dey Trina", section: "C" },
  "242-115-121": { name: "Nusrath Jahan Chowdhury", section: "C" },
  "242-115-123": { name: "Rini Begum Kulsuma", section: "C" },
  "242-115-125": { name: "Md. Mahmudul Hasan Yamin", section: "C" },
  "242-115-126": { name: "Md. Jubayer Hasan Munna", section: "C" },
  "242-115-127": { name: "Fahima Akther", section: "C" },
  "242-115-129": { name: "A.S.M. Nafiu Iqbal", section: "C" },
  "242-115-130": { name: "Tasmina Begum Rima", section: "C" },
  "242-115-132": { name: "Md. Mahiyan Noor Mahi", section: "C" },
  "242-115-133": { name: "Syed Farhan Hussain Rasel", section: "C" },
  "242-115-135": { name: "Ahammod Ali", section: "C" },
  "242-115-136": { name: "Bashar Ahmed", section: "C" },
  "242-115-139": { name: "Avizith Dash", section: "C" },
  "242-115-140": { name: "Shyamoshree Sinha", section: "C" },
  "242-115-141": { name: "Susoma Rahman", section: "C" },
  "242-115-142": { name: "Nuhza Suraia", section: "C" },
  "242-115-143": { name: "Riktho Saha", section: "C" },
  "242-115-144": { name: "Sadia Islam", section: "C" },
  "242-115-145": { name: "Nasisa Tabassum", section: "C" },
  "242-115-147": { name: "Nuzud Binte Olid", section: "C" },
  "242-115-148": { name: "Sudeshna Roy Pima", section: "C" },
  "242-115-151": { name: "Thouhida Yeasmin", section: "D" },
  "242-115-152": { name: "Tawhid Hussain Chowdhury", section: "D" },
  "242-115-153": { name: "Abdul Muhit Fahim Chowdhury", section: "D" },
  "242-115-154": { name: "Md. Tanvirul Islam Tanim", section: "D" },
  "242-115-155": { name: "Maliha Tabassum Hridila", section: "D" },
  "242-115-156": { name: "Mohua Pathan Madhobi", section: "D" },
  "242-115-157": { name: "Abu Bokor Al Moyeen", section: "D" },
  "242-115-158": { name: "Nabil Abdullah Chowdhury", section: "D" },
  "242-115-159": { name: "Sharmin Akter", section: "D" },
  "242-115-160": { name: "Riya Das", section: "D" },
  "242-115-161": { name: "Senjuti Gupta", section: "D" },
  "242-115-162": { name: "Shamsul Arefin Kanon", section: "D" },
  "242-115-163": { name: "Mohsin Hasan", section: "D" },
  "242-115-164": { name: "Fatema Akter", section: "D" },
  "242-115-165": { name: "Tahsin Rahman Rijoy", section: "D" },
  "242-115-166": { name: "Sayed Talha Siddik", section: "D" },
  "242-115-167": { name: "Ashraul Anam Mashafi", section: "D" },
  "242-115-168": { name: "Sultana Akter", section: "D" },
  "242-115-169": { name: "Arman Ahmed", section: "D" },
  "242-115-170": { name: "Md. Imran Hossen", section: "D" },
  "242-115-171": { name: "Mukti Rani Paik", section: "D" },
  "242-115-172": { name: "Mst. Fatheha Rahman Riya", section: "D" },
  "242-115-173": { name: "Nazmul Islam", section: "D" },
  "242-115-174": { name: "Nurul Muhsin Najif", section: "D" },
  "242-115-175": { name: "Fariha Hussain Trina", section: "D" },
  "242-115-176": { name: "Abdur Rahman Mamun", section: "D" },
  "242-115-177": { name: "Soumita Acharjee", section: "D" },
  "242-115-178": { name: "Shahidul Islam Kamran", section: "D" },
  "242-115-179": { name: "Afzal Hussain Sayem", section: "D" },
  "242-115-180": { name: "Saif Al Safa", section: "D" },
  "242-115-181": { name: "Shuvo Debnath", section: "D" },
  "242-115-182": { name: "Md. Nadim Fazla Rafi", section: "D" },
  "242-115-183": { name: "Debojyoti Talukder Raj", section: "D" },
  "242-115-184": { name: "Tonmoy Chakrabarty", section: "D" },
  "242-115-185": { name: "Madhobe Gosh", section: "D" },
  "242-115-186": { name: "Shruti Das Pourkaystha", section: "D" },
  "242-115-187": { name: "Tanjina Tasnim Tahsin", section: "D" },
  "242-115-188": { name: "Sumir Paul", section: "D" },
  "242-115-189": { name: "Mahadi Hasan Tanim", section: "D" },
  "242-115-190": { name: "Sumaiya Jaman Urmi", section: "D" },
  "242-115-191": { name: "Nondita Ray", section: "D" },
  "242-115-192": { name: "Sheikh Sumaiya Binte Musa", section: "D" },
  "242-115-193": { name: "Sheikh Nafisa Montaha", section: "D" },
  "242-115-194": { name: "Aysha Akther Tanni", section: "D" },
  "242-115-195": { name: "Md. Shorifull Hasan Oni", section: "D" },
  "242-115-196": { name: "Tarek Amin", section: "D" },
  "242-115-197": { name: "Tabassuma Bushra Masuma", section: "D" },
  "242-115-198": { name: "Muhammad Mahbubur Rahman Shahan", section: "D" },
  "242-115-199": { name: "Umma Rumman Jim", section: "D" },
  "242-115-200": { name: "Bishal Sutradher", section: "D" },
  "232-115-242": { name: "Rawful Islam Rifat", section: "E" },
  "232-115-345": { name: "Shorna Nandi", section: "E" },
  "242-115-202": { name: "Towhidul Islam", section: "E" },
  "242-115-206": { name: "Uttsho Debnath", section: "E" },
  "242-115-207": { name: "Md. Obayedur Rahman", section: "E" },
  "242-115-208": { name: "Halima Begum", section: "E" },
  "242-115-210": { name: "Rahnuma Mostafa", section: "E" },
  "242-115-211": { name: "Tanvi Khan", section: "E" },
  "242-115-212": { name: "Bishakha Chanda", section: "E" },
  "242-115-213": { name: "Shimla Sinha", section: "E" },
  "242-115-214": { name: "Syed Ehsan Hussan", section: "E" },
  "242-115-215": { name: "Bijay Krishna Paul", section: "E" },
  "242-115-216": { name: "Miftahul Islam Fahim", section: "E" },
  "242-115-219": { name: "Syeda Nusrat Jahan Rini", section: "E" },
  "242-115-220": { name: "Umme Koli", section: "E" },
  "242-115-221": { name: "Nusrat Jahan Muntaha", section: "E" },
  "242-115-222": { name: "Tafhima Murshed Adri", section: "E" },
  "242-115-224": { name: "Sabbiha Afrin Suchi", section: "E" },
  "242-115-225": { name: "Fahim Muntasir Sadi", section: "E" },
  "242-115-226": { name: "Sabiha Sami", section: "E" },
  "242-115-227": { name: "Showvik Sharma", section: "E" },
  "242-115-229": { name: "Jarin Taslim", section: "E" },
  "242-115-230": { name: "Mashura Khatun Mashu", section: "E" },
  "242-115-231": { name: "Maisha Farjana Raisa", section: "E" },
  "242-115-232": { name: "Sukanto Biswas", section: "E" },
  "242-115-233": { name: "Shrabon", section: "E" },
  "242-115-235": { name: "Md. Fardin Mahtab", section: "E" },
  "242-115-236": { name: "Nihal Khan", section: "E" },
  "242-115-237": { name: "Nafisha Samin", section: "E" },
  "242-115-238": { name: "Choudhury Adil", section: "E" },
  "242-115-243": { name: "Amina- Al-adiba", section: "E" },
  "242-115-244": { name: "Ratul Chakraborty", section: "E" },
  "242-115-245": { name: "Md. Mehedi Hasan", section: "E" },
  "242-115-246": { name: "Farzana Rahman Riya", section: "E" },
  "242-115-247": { name: "Mahdee Haque", section: "E" },
  "242-115-248": { name: "Tarek Ahmed Oyan", section: "E" },
  "242-115-249": { name: "Sabysachi Das Tony", section: "E" },
  "242-115-250": { name: "Mehedi Hasan", section: "E" },
  "242-115-149": { name: "Farzana Akter Saeeda", section: "G" },
  "242-115-150": { name: "Sabuj Hasan", section: "G" },
  "241-115-249": { name: "Fatima Islam Shaki", section: "G" },
  "241-115-152": { name: "Tinni Bonik", section: "G" },
  "242-115-301": { name: "Nafisa Rahman Ramisa", section: "G" },
  "242-115-302": { name: "Pritam Shakar Deb", section: "G" },
  "242-115-303": { name: "Rubaiya Rahman Akhi", section: "G" },
  "242-115-305": { name: "Pollab Das", section: "G" },
  "242-115-307": { name: "Sabbir Ahmed Rimon", section: "G" },
  "242-115-308": { name: "Samiha Mahjabin", section: "G" },
  "242-115-311": { name: "Umme Habiba Nuha", section: "G" },
  "242-115-313": { name: "Debapratim Deb", section: "G" },
  "242-115-314": { name: "Falguni Sharmma", section: "G" },
  "242-115-321": { name: "Nusrat Jahan Nuha", section: "G" },
  "242-115-322": { name: "Israt Jahan Bithy", section: "G" },
  "242-115-324": { name: "Gourab Chakrabarty", section: "G" },
  "242-115-325": { name: "Joy Baktchi", section: "G" },
  "242-115-326": { name: "Adrita Chakrabarty Richi", section: "G" },
  "242-115-327": { name: "Manzurul Ambia", section: "G" },
  "242-115-328": { name: "Alok Talukder", section: "G" },
  "242-115-331": { name: "Tonnoy Datta Bishal", section: "G" },
  "242-115-332": { name: "Fahmida Yeasmin Momi", section: "G" },
  "242-115-334": { name: "Tamzida Habiba Mim", section: "G" },
  "242-115-335": { name: "Tahsin Rahman", section: "G" },
  "242-115-336": { name: "Dabosri Roy Porna", section: "G" },
  "242-115-337": { name: "Promick Dastidar Sami", section: "G" },
  "242-115-342": { name: "Mahzabin Rahman Moumita", section: "G" },
  "242-115-343": { name: "Banidipa Chakraborty", section: "G" },
  "242-115-344": { name: "Md. Al-amin Ahmed Chowdhur", section: "G" },
  "242-115-346": { name: "Md. Sami Jamali", section: "G" },
  "242-115-347": { name: "Muhammad Hanif", section: "G" }
};

// Section-wise Faculty Mapping
const sectionFacultyMap = {
  "A": [
    { name: "Mashia Hossain", course: "Communication Engineering", code: "CSE 215", desig: "Lecturer", dept: "Department of Computer Science & Engineering" },
    { name: "Barnali Sarker Shoumita (OS)", course: "Operating System", code: "CSE 321", desig: "Teaching Assistant", dept: "Department of Computer Science & Engineering" },
    { name: "Barnali Sarker Shoumita (OS Lab)", course: "Operating System Lab", code: "CSE 322", desig: "Teaching Assistant", dept: "Department of Computer Science & Engineering" },
    { name: "Khadia Akter", course: "Business Communication", code: "GED 431", desig: "Lecturer", dept: "Department of Business Administration" }
  ],
  "B": [
    { name: "Wadia Iqbal Chowdhury", course: "Communication Engineering", code: "CSE 215", desig: "Lecturer", dept: "Department of Software Engineering" },
    { name: "Samia Rahman Rima (OS)", course: "Operating System", code: "CSE 321", desig: "Lecturer", dept: "Department of Computer Science & Engineering" },
    { name: "Samia Rahman Rima (OS Lab)", course: "Operating System Lab", code: "CSE 322", desig: "Lecturer", dept: "Department of Computer Science & Engineering" },
    { name: "Khadia Akter", course: "Business Communication", code: "GED 431", desig: "Lecturer", dept: "Department of Business Administration" }
  ],
  "C": [
    { name: "Wadia Iqbal Chowdhury", course: "Communication Engineering", code: "CSE 215", desig: "Lecturer", dept: "Department of Software Engineering" },
    { name: "Samia Rahman Rima (OS)", course: "Operating System", code: "CSE 321", desig: "Lecturer", dept: "Department of Computer Science & Engineering" },
    { name: "Samia Rahman Rima (OS Lab)", course: "Operating System Lab", code: "CSE 322", desig: "Lecturer", dept: "Department of Computer Science & Engineering" },
    { name: "Khadia Akter", course: "Business Communication", code: "GED 431", desig: "Lecturer", dept: "Department of Business Administration" }
  ],
  "D": [
    { name: "Wadia Iqbal Chowdhury", course: "Communication Engineering", code: "CSE 215", desig: "Lecturer", dept: "Department of Software Engineering" },
    { name: "Samia Rahman Rima (OS)", course: "Operating System", code: "CSE 321", desig: "Lecturer", dept: "Department of Computer Science & Engineering" },
    { name: "Samia Rahman Rima (OS Lab)", course: "Operating System Lab", code: "CSE 322", desig: "Lecturer", dept: "Department of Computer Science & Engineering" },
    { name: "Dr. Md. Razaul Haque", course: "Business Communication", code: "GED 431", desig: "Assistant Professor", dept: "Department of Business Administration" }
  ],
  "E": [
    { name: "Md. Imam Mahdi", course: "Communication Engineering", code: "CSE 215", desig: "Lecturer", dept: "Department of Electrical and Electronic Engineering" },
    { name: "Khalid Bin Selim (OS)", course: "Operating System", code: "CSE 321", desig: "Teaching Assistant", dept: "Department of Computer Science & Engineering" },
    { name: "Khalid Bin Selim (OS Lab)", course: "Operating System Lab", code: "CSE 322", desig: "Teaching Assistant", dept: "Department of Computer Science & Engineering" },
    { name: "Dr. Md. Razaul Haque", course: "Business Communication", code: "GED 431", desig: "Assistant Professor", dept: "Department of Business Administration" }
  ],
  "F": [
    { name: "Md. Imam Mahdi", course: "Communication Engineering", code: "CSE 215", desig: "Lecturer", dept: "Department of Electrical and Electronic Engineering" },
    { name: "Khalid Bin Selim (OS)", course: "Operating System", code: "CSE 321", desig: "Teaching Assistant", dept: "Department of Computer Science & Engineering" },
    { name: "Khalid Bin Selim (OS Lab)", course: "Operating System Lab", code: "CSE 322", desig: "Teaching Assistant", dept: "Department of Computer Science & Engineering" },
    { name: "Dr. Md. Razaul Haque", course: "Business Communication", code: "GED 431", desig: "Assistant Professor", dept: "Department of Business Administration" }
  ],
  "G": [
    { name: "Wadia Iqbal Chowdhury", course: "Communication Engineering", code: "CSE 215", desig: "Lecturer", dept: "Department of Software Engineering" },
    { name: "Samia Rahman Rima (OS)", course: "Operating System", code: "CSE 321", desig: "Lecturer", dept: "Department of Computer Science & Engineering" },
    { name: "Samia Rahman Rima (OS Lab)", course: "Operating System Lab", code: "CSE 322", desig: "Lecturer", dept: "Department of Computer Science & Engineering" },
    { name: "Dr. Md. Razaul Haque", course: "Business Communication", code: "GED 431", desig: "Assistant Professor", dept: "Department of Business Administration" }
  ]
};

let autoMemberCount = 0;
let customMemberCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  handleModeChange();
  formatDateInput();
});

// Structural mode & type changes
function handleDocTypeChange() {
  const docTypeSelect = document.getElementById('in-doc-type').value;
  const customHeadingInput = document.getElementById('in-custom-heading');
  
  if (docTypeSelect === "Custom") {
    customHeadingInput.style.display = "block";
  } else {
    customHeadingInput.style.display = "none";
    customHeadingInput.value = ""; 
  }
  updatePreview();
}

function toggleTitleInput() {
  const isChecked = document.getElementById('check-title').checked;
  const inputField = document.getElementById('in-assign-title');
  const outputField = document.getElementById('out-assign-title');
  inputField.style.display = isChecked ? "block" : "none";
  if (!isChecked) {
    inputField.value = "";
    outputField.innerText = "";
  }
  updatePreview();
}

function toggleGroupNameInput() {
  const isChecked = document.getElementById('check-group-name').checked;
  const inputField = document.getElementById('in-group-name');
  const outputWrapper = document.getElementById('out-group-name-wrapper');
  inputField.style.display = isChecked ? "block" : "none";
  outputWrapper.style.display = isChecked ? "block" : "none";
  if (!isChecked) {
    inputField.value = "";
    document.getElementById('out-group-name').innerText = "...";
  }
  updatePreview();
}

function handleModeChange() {
  const mode = document.getElementById('in-mode').value;
  const entryType = document.getElementById('in-entry-type').value;
  
  const outSingle = document.getElementById('out-single-student');
  const outGroup = document.getElementById('out-group-students');

  if (mode === "individual") {
    outSingle.style.display = "block";
    outGroup.style.display = "none";
    document.getElementById('out-group-name-wrapper').style.display = "none";
  } else {
    outSingle.style.display = "none";
    outGroup.style.display = "block";
  }

  handleEntryTypeChange();
}

function handleEntryTypeChange() {
  const mode = document.getElementById('in-mode').value;
  const entryType = document.getElementById('in-entry-type').value;

  const indAuto = document.getElementById('ind-auto-container');
  const grpAuto = document.getElementById('grp-auto-container');
  const customContainer = document.getElementById('custom-fields-container');
  const autoFaculty = document.getElementById('auto-faculty-container');
  const custIndExtra = document.getElementById('cust-ind-extra');
  const customGroupMembers = document.getElementById('custom-group-members');

  if (entryType === 'auto') {
    customContainer.style.display = "none";
    autoFaculty.style.display = "block";

    if (mode === 'individual') {
      indAuto.style.display = "block";
      grpAuto.style.display = "none";
      handleIndAutoLookup();
    } else {
      indAuto.style.display = "none";
      grpAuto.style.display = "block";
      const wrapper = document.getElementById('group-member-lookup-wrapper');
      if (wrapper.children.length === 0) {
        addGroupAutoMemberField();
      } else {
        handleGroupAutoLookup();
      }
    }
  } else {
    // Custom Mode
    indAuto.style.display = "none";
    grpAuto.style.display = "none";
    autoFaculty.style.display = "none";
    customContainer.style.display = "block";

    if (mode === 'individual') {
      custIndExtra.style.display = "block";
      customGroupMembers.style.display = "none";
      document.getElementById('cust-student-name').style.display = "block";
      document.getElementById('cust-student-id').style.display = "block";
    } else {
      custIndExtra.style.display = "none";
      customGroupMembers.style.display = "block";
      document.getElementById('cust-student-name').style.display = "none";
      document.getElementById('cust-student-id').style.display = "none";
      
      const custWrapper = document.getElementById('custom-member-fields-wrapper');
      if (custWrapper.children.length === 0) {
        addCustomGroupMemberField();
      }
    }
  }
  updatePreview();
}

// Auto Lookup Helpers
function handleIndAutoLookup() {
  const id = document.getElementById('in-ind-id').value.trim();
  const student = studentsDatabase[id];
  if (student) {
    document.getElementById('out-student-name').innerText = student.name;
    document.getElementById('out-student-id').innerText = id;
    document.getElementById('out-section').innerText = student.section;
    populateFacultyDropdown(student.section);
  } else {
    document.getElementById('out-student-name').innerText = id ? "Not Found" : "...";
    document.getElementById('out-student-id').innerText = id || "...";
  }
}

function populateFacultyDropdown(section) {
  const select = document.getElementById('in-prof-name');
  select.innerHTML = '<option value="">-- Select Faculty --</option>';
  
  const faculties = sectionFacultyMap[section] || [];
  faculties.forEach((f, idx) => {
    const opt = document.createElement('option');
    opt.value = `${section}_${idx}`;
    opt.innerText = `${f.name} (${f.course})`;
    select.appendChild(opt);
  });
  
  autoFillFacultyDetails();
}

function autoFillFacultyDetails() {
  const val = document.getElementById('in-prof-name').value;
  if (!val) {
    document.getElementById('out-course').innerText = "...";
    document.getElementById('out-code').innerText = "...";
    document.getElementById('out-prof-name').innerText = "...";
    document.getElementById('out-prof-desig').innerText = "...";
    document.getElementById('out-prof-dept').innerText = "...";
    return;
  }

  const [section, idx] = val.split('_');
  const faculty = sectionFacultyMap[section][idx];

  document.getElementById('out-course').innerText = faculty.course;
  document.getElementById('out-code').innerText = faculty.code;
  document.getElementById('out-prof-name').innerText = faculty.name.split(' (')[0];
  document.getElementById('out-prof-desig').innerText = faculty.desig;
  document.getElementById('out-prof-dept').innerText = faculty.dept;
}

// Group Auto Mode Fields
function addGroupAutoMemberField() {
  autoMemberCount++;
  const wrapper = document.getElementById('group-member-lookup-wrapper');
  const row = document.createElement('div');
  row.className = 'member-input-row';
  row.id = `auto-mem-row-${autoMemberCount}`;
  row.innerHTML = `
    <input type="text" class="grp-auto-id" placeholder="Student ID" oninput="handleGroupAutoLookup()">
    <input type="text" class="grp-auto-name-disp" placeholder="Name (Auto)" readonly>
    <button type="button" class="remove-member-btn" onclick="removeGroupAutoMemberField(${autoMemberCount})">×</button>
  `;
  wrapper.appendChild(row);
  handleGroupAutoLookup();
}

function removeGroupAutoMemberField(id) {
  const row = document.getElementById(`auto-mem-row-${id}`);
  if (row) row.remove();
  handleGroupAutoLookup();
}

function handleGroupAutoLookup() {
  const idInputs = document.getElementsByClassName('grp-auto-id');
  const nameDisps = document.getElementsByClassName('grp-auto-name-disp');
  const tbody = document.getElementById('out-member-rows');
  tbody.innerHTML = "";

  let detectedSection = "";

  for (let i = 0; i < idInputs.length; i++) {
    const idVal = idInputs[i].value.trim();
    const student = studentsDatabase[idVal];
    let nameVal = "";

    if (student) {
      nameVal = student.name;
      if (!detectedSection) detectedSection = student.section;
    } else if (idVal) {
      nameVal = "Not Found";
    }

    nameDisps[i].value = nameVal;

    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${nameVal || "..."}</td><td style="text-align:center;">${idVal || "..."}</td>`;
    tbody.appendChild(tr);
  }

  if (detectedSection) {
    document.getElementById('out-section').innerText = detectedSection;
    populateFacultyDropdown(detectedSection);
  }
}

// Group Custom Mode Fields
function addCustomGroupMemberField() {
  customMemberCount++;
  const wrapper = document.getElementById('custom-member-fields-wrapper');
  const row = document.createElement('div');
  row.className = 'member-input-row';
  row.id = `cust-mem-row-${customMemberCount}`;
  row.innerHTML = `
    <input type="text" class="cust-grp-name" placeholder="Member Name" oninput="updateCustomGroupPreview()">
    <input type="text" class="cust-grp-id" placeholder="Member ID" oninput="updateCustomGroupPreview()">
    <button type="button" class="remove-member-btn" onclick="removeCustomGroupMemberField(${customMemberCount})">×</button>
  `;
  wrapper.appendChild(row);
  updateCustomGroupPreview();
}

function removeCustomGroupMemberField(id) {
  const row = document.getElementById(`cust-mem-row-${id}`);
  if (row) row.remove();
  updateCustomGroupPreview();
}

function updateCustomGroupPreview() {
  const names = document.getElementsByClassName('cust-grp-name');
  const ids = document.getElementsByClassName('cust-grp-id');
  const tbody = document.getElementById('out-member-rows');
  tbody.innerHTML = "";

  for (let i = 0; i < names.length; i++) {
    const mName = names[i].value || "...";
    const mId = ids[i].value || "...";
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${mName}</td><td style="text-align:center;">${mId}</td>`;
    tbody.appendChild(tr);
  }
}

function formatDate(dateString) {
  if (!dateString) return "__________________";
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${day} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function formatDateInput() {
  const dateInput = document.getElementById('in-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    updatePreview();
  }
}

// Master Preview Update Switch
function updatePreview() {
  // Document Type Header
  const docTypeSelect = document.getElementById('in-doc-type').value;
  if (docTypeSelect === "Custom") {
    const customVal = document.getElementById('in-custom-heading').value;
    document.getElementById('out-doc-type').innerText = customVal || "Custom Heading";
  } else {
    document.getElementById('out-doc-type').innerText = docTypeSelect;
  }

  // Group Name update
  const groupName = document.getElementById('in-group-name').value;
  document.getElementById('out-group-name').innerText = groupName || "...";

  // Date
  const rawDate = document.getElementById('in-date').value;
  document.getElementById('out-date').innerText = formatDate(rawDate);

  const entryType = document.getElementById('in-entry-type').value;
  const mode = document.getElementById('in-mode').value;

  if (entryType === 'custom') {
    document.getElementById('out-course').innerText = document.getElementById('cust-course-name').value || "...";
    document.getElementById('out-code').innerText = document.getElementById('cust-course-code').value || "...";
    document.getElementById('out-prof-name').innerText = document.getElementById('cust-teacher-name').value || "...";
    document.getElementById('out-prof-desig').innerText = document.getElementById('cust-teacher-desig').value || "...";
    document.getElementById('out-prof-dept').innerText = document.getElementById('cust-teacher-dept').value || "...";

    if (mode === 'individual') {
      document.getElementById('out-student-name').innerText = document.getElementById('cust-student-name').value || "...";
      document.getElementById('out-student-id').innerText = document.getElementById('cust-student-id').value || "...";
      document.getElementById('out-section').innerText = document.getElementById('cust-section').value || "...";
      document.getElementById('out-batch').innerText = document.getElementById('cust-batch').value || "...";
      document.getElementById('out-dept').innerText = document.getElementById('cust-dept').value || "...";
    } else {
      document.getElementById('out-section').innerText = "...";
      document.getElementById('out-batch').innerText = "61st";
      document.getElementById('out-dept').innerText = "Department of Computer Science and Engineering";
      updateCustomGroupPreview();
    }
  } else {
    document.getElementById('out-batch').innerText = "61st";
    document.getElementById('out-dept').innerText = "Department of Computer Science and Engineering";
    if (mode === 'individual') {
      handleIndAutoLookup();
    } else {
      handleGroupAutoLookup();
    }
  }
}
