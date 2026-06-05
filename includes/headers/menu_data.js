// - - Sperowider Begin: Do not move
// <spero-mongle><pattern>"((/[^"]+)|(http://[^"]+))"</pattern><group>1</group><replace-with>SperoDocRoot + "includes/headers/" + "${URL}"</replace-with></spero-mongle>
var SperoMeta = document.getElementsByName("Sperowider-DocRoot");
var SperoDocRoot = SperoMeta[0] ? SperoMeta[0].content : "";
// http://developer.irt.org/script/1607.htm
// http://www.simiandesign.com/blog-fu/2003/09/001751.cfm
// - - End Sperowider - -

/*
 Milonic DHTML Website Navigation Menu - Version 3.x
 Written by Andy Woolley - Copyright 2002 (c) Milonic Solutions Limited. All Rights Reserved.
 Please visit http://www.milonic.co.uk/menu or e-mail menu3@milonic.com for more information.
 
 The Free use of this menu is only available to Non-Profit, Educational & Personal web sites.
 Commercial and Corporate licenses  are available for use on all other web sites & Intranets.
 All Copyright notices MUST remain in place at ALL times and, please keep us informed of your 
 intentions to use the menu and send us your URL.
*/

//The following line is critical for menu operation, and MUST APPEAR ONLY ONCE. If you have more than one menu_array.js file rem out this line in subsequent files
var menunum=0;var menus=new Array();var _d=document;
function addmenu(){menunum++;menus[menunum]=menu;}
function dumpmenus()
{ var mt="<scr"+"ipt language=javascript>";
for(var a=1;a<menus.length;a++){ mt+=" var menu"+a+"=menus["+a+"];"} mt+="<\/scr"+"ipt>";_d.write(mt)}
//Please leave the above line intact. The above also needs to be enabled if it not already enabled unless this file is part of a multi pack.


///////////////////////////////////////////////////////////
// - - - - - - - -  Editable properties START here - - - - - - - - - - //
///////////////////////////////////////////////////////////

// Special effect string for IE5.5 or above please visit http://www.milonic.co.uk/menu/filters_sample.php for more filters
var effect = "Fade(duration=0.0);Alpha(style=0,opacity=100)";
// effect = "Fade(duration=0.1);Alpha(style=0,opacity=100);Shadow(color='#777777', Direction=135, Strength=5)";


var timegap=420;		 // The time delay for menus to remain visible
var followspeed=5;		// Follow Scrolling speed
var followrate=40;		 // Follow Scrolling Rate
var suboffset_top=0;   // Sub menu offset Top position 
var suboffset_left=-2;	// Sub menu offset Left position
var closeOnClick = true;

var hstyle1=[			// style1 is an array of properties. You can have as many property arrays as you need. This means that menus can have their own style.
"000000",	    		// Mouse Off Font Color
"b0b6b4",			// Mouse Off Background Color
"BBBBBB",			// Mouse On Font Color
"321929",			// Mouse On Background Color
"000000",			// Menu Border Color 
10,				  // Font Size in pixels
"normal",			// Font Style (italic or normal)
"bold",			 // Font Weight (bold or normal)
"Verdana,Arial",			  // Font Name
3,				   // Menu Item Padding
"/includes/headers/images/arrow-right-lb.gif",		// Sub Menu Image (Leave this blank if not needed)
1,				   // 3D Border & Separator bar
"888888",			  // 3D High Color
"111111",			// 3D Low Color
"321929",			// Current Page Item Font Color (leave this blank to disable)
"9da3a1",			 // Current Page Item Background Color (leave this blank to disable) cb6611
"/includes/headers/images/arrow-down-lb.gif",	   // Top Bar image (Leave this blank to disable)
"ffffff",			   // Menu Header Font Color (Leave blank if headers are not needed)
"000099",			// Menu Header Background Color (Leave blank if headers are not needed)
"black",			 // Menu Item Separator Color
];


// = = = = = = = = = =  B E G I N   M E N U   T E M P L A T E  = = = = = = = = = = = = = = = = = = = = = = = 
//addmenu(menu=[		// This is the array that contains your menu properties and details
//"menuname",			// Menu Name - This is needed in order for the menu to be called
//129,					// Menu Top - The Top position of the menu in pixels
//99,					// Menu Left - The Left position of the menu in pixels
//,						// Menu Width - Menus width in pixels
//1,						// Menu Border Width 
//,					 // Screen Position - here you can use "center;left;right;middle;top;bottom" or a combination of "center:middle"
//style1,			    // Properties Array - this is set higher up, as above
//1,					// Always Visible - allows the menu item to be visible at all time (1=on/0=off)
//"left",				// Alignment - sets the menu elements text alignment, values valid here are: left, right or center
//,					// Filter - Text variable for setting transitional effects on menu activation - see above for more info
//,					// Follow Scrolling - Tells the menu item to follow the user down the screen (visible at all times) (1=on/0=off)
//1, 					// Horizontal Menu - Tells the menu to become horizontal instead of top to bottom style (1=on/0=off)
//,					// Keep Alive - Keeps the menu visible until the user moves over another menu or clicks elsewhere on the page (1=on/0=off)
//,					// Position of TOP sub image left:center:right
//,					// Set the Overall Width of Horizontal Menu to 100% and height to the specified amount (Leave blank to disable)
//,					// Right To Left - Used in Hebrew for example. (1=on/0=off)
//,					// Open the Menus OnClick - leave blank for OnMouseover (1=on/0=off)
//,					// ID of the div you want to hide on MouseOver (useful for hiding form elements)
//,					// Background image for menu when BGColor set to transparent.
//,					// Scrollable Menu
//,					// Reserved for future use
// = = = = = = = = = =  E N D   M E N U   T E M P L A T E  = = = = = = = = = = = = = = = = = = = = = = = 

var menu;
addmenu(menu=["drugs",117,101,140,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
,"Plants & Drugs Index","/psychoactives/",,,2
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
,"Plants","show-menu=plants","/plants/",,0
,"Chemicals","show-menu=chemicals","/chemicals/",,0
,"Pharmaceuticals","show-menu=pharms","/pharms/",,0
,"Herbs","show-menu=herbs","/herbs/",,0
,"Smarts","show-menu=smarts","/smarts/",,0
,"Animals","show-menu=animals","/animals/",,1
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
,"Basics","show-menu=basics","/psychoactives/basics/basics.shtml",,0
,"Images","show-menu=images","/psychoactives/psychoactives_images.shtml",,0
,"Experiences","show-menu=experiences","/experiences/exp_front.shtml",,0
,"Law","show-menu=law","/psychoactives/law/law.shtml",,0
,"Chemistry","show-menu=chemistry","/psychoactives/chemistry/chemistry.shtml",,0
,"Drug Testing","show-menu=testing","/psychoactives/testing/testing.shtml",,0
,"Health","show-menu=health","/psychoactives/health/health.shtml",,0
,"Spirit & Culture","show-menu=culture","/entheogens/ethnobotany/ethnobotany.shtml",,0
,"Community","show-menu=community","/psychoactives/links/links_psychoactives.shtml",,0
]);

		addmenu(menu=["plants",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Plants Vault","/plants/",,,2
		,"Amanitas","/plants/amanitas/",,,0
		,"Cacti","/plants/cacti/",,,0
		,"Cannabis","/plants/cannabis/",,,0
		,"Coca","/plants/coca/",,,0		
		,"Psilocybin Mushrooms","/plants/mushrooms/",,,0
		,"Salvia divinorum","/plants/salvia/",,,0
		,"Tobacco","/plants/tobacco/",,,1
		,"More . . . ","/plants/",,,0		
		]);

		addmenu(menu=["chemicals",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Chemicals Vault","/chemicals/",,,2
		,"Amphetamine","/chemicals/amphetamines/",,,0
		,"DXM","/chemicals/dxm/",,,0
		,"GHB","/chemicals/ghb/",,,0		
		,"Ketamine","/chemicals/ketamine/",,,0				
		,"LSD","/chemicals/lsd/",,,0
		,"MDMA","/chemicals/mdma/",,,0
		,"Nitrous","/chemicals/nitrous/",,,1
		,"More . . . ","/chemicals/",,,0
		]);

		addmenu(menu=["pharms",,,160,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Pharmaceuticals Vault","/pharms/",,,2
		,"Alprazolam (Xanax)","/pharms/alprazolam/",,,0		
		,"Bupropion (Wellbutrin)","/pharms/bupropion/",,,0
		,"Diazepam (Valium)","/pharms/diazepam/",,,0		
		,"Fluoxetine (Prozac)","/pharms/fluoxetine/",,,0				
		,"Hydrocodone (Vicodin)","/pharms/hydrocodone/",,,0
		,"Methylphenidate (Ritalin)","/pharms/methylphenidate/",,,0
		,"Paroxetine (Paxil)","/pharms/paroxetine/",,,1
		,"More . . . ","/pharms/",,,0		
		]);

		addmenu(menu=["herbs",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Herbs Vault","/herbs/",,,2
		,"Calamus","/herbs/calamus/",,,0		
		,"Damiana","/herbs/damiana/",,,0
		,"Foxglove","/herbs/foxglove/",,,0		
		,"Ginseng","/herbs/ginseng/",,,0				
		,"Milk Thistle","/herbs/milk_thistle/",,,0
		,"Pennyroyal","/herbs/pennyroyal/",,,0
		,"Valerian","/herbs/valerian/",,,1
		,"More . . . ","/herbs/",,,0		
		]);	

		addmenu(menu=["smarts",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Nootropics Vault","/smarts/",,,2
		,"Adrafinil","/smarts/adrafinil/",,,0		
		,"DMAE","/smarts/dmae/",,,0
		,"Ginkgo biloba","/smarts/ginkgo/",,,0		
		,"Hydergine","/smarts/hydergine/",,,0				
		,"Melatonin","/smarts/melatonin/",,,0
		,"Piracetam","/smarts/piracetam/",,,0
		,"Tryptophan","/smarts/tryptophan/",,,1
		,"More . . . ","/smarts/",,,0		
		]);	

		addmenu(menu=["animals",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Animals Vault","/animals/",,,2
		,"Bufo Toads","/animals/toads/",,,0		
		,"Phyllomedusa bicolor","/animals/phyllomedusa/",,,0
		,"More . . . ","/animals/",,,0		
		]);			
		
		//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 		
		
		addmenu(menu=["basics",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Basics Vaults","/psychoactives/basics/basics.shtml",,,2		
		,"Dosage","/psychoactives/dose/dose.shtml",,,0
		,"Effects","/psychoactives/effects/effects.shtml",,,0
		,"FAQs","/psychoactives/faqs/faqs.shtml",,,0
		,"History","/psychoactives/history/history.shtml",,,0
		,"Slang","/psychoactives/slang/slang.shtml",,,0		
		]);

		addmenu(menu=["images",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Image Vaults","/psychoactives/psychoactives_images.shtml",,,2		
		,"Plants","/plants/plants_images.shtml",,,0
		,"Chemicals","/chemicals/chemicals_images.shtml",,,0
		,"Pharmaceuticals","/pharms/pharms_images.shtml",,,0
		,"Herbs","/herbs/herbs_images.shtml",,,0
		,"Smarts","/smarts/smarts_images.shtml",,,1
		,"Submit Image","/general/submissions/submissions_images.shtml",,,1
		]);

		addmenu(menu=["experiences",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Experience Vaults","/experiences/exp_front.shtml",,,2		
		,"New Reports","/experiences/exp.cgi?New",,,0
		,"By Substance","/experiences/exp_list.shtml",,,0
		,"Search","/search.php",,,0
		,"About Experience Vaults","/experiences/exp_about.cgi",,,1
		,"Submit Experience","/experiences/exp_submit.cgi",,,0
		]);

		addmenu(menu=["law",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Law Vaults","/psychoactives/law/law.shtml",,,2		
		,"By Substance","/psychoactives/law/law.shtml#substance",,,0
		,"Federal Laws","/psychoactives/law/law.shtml#federal",,,0
		,"State Laws","/psychoactives/law/law.shtml#state",,,1
		,"Drug Policy & Reform","/psychoactives/links/links_policy.shtml",,,0
		,"Prohibition Links","/psychoactives/prohibition/prohibition.shtml",,,0
		]);

		addmenu(menu=["chemistry",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Chemistry Vaults","/psychoactives/chemistry/chemistry.shtml",,,2		
		,"By Substance","/psychoactives/chemistry/chemistry.shtml",,,0
		,"Structures","/psychoactives/chemistry/chemistry_structures.shtml",,,0
		,"Chem-Compare","/cgi-bin/chem_compare/chem_compare.cgi",,,0
		]);

		addmenu(menu=["testing",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Drug Testing Vaults","/psychoactives/testing/testing.shtml",,,2		
		,"Basics","/psychoactives/testing/testing_info1.shtml",,,0
		,"Products","/psychoactives/testing/testing_products.shtml",,,0
		]);

		addmenu(menu=["health",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Psychoactives & Health","/psychoactives/health/health.shtml",,,2		
		,"Addiction","/psychoactives/addiction/addiction.shtml",,,0
		,"LD50s","/psychoactives/health/psychoactives_ld50s.shtml",,,0
		,"Statistics","/psychoactives/statistics/statistics.shtml",,,0
		]);

		addmenu(menu=["culture",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Entheogen Vaults","/entheogens/entheogens.shtml",,,2		
		,"Spiritual & Ritual Use","/entheogens/spiritual.shtml",,,0
		,"Psychedelic Culture","/entheogens/recreational.shtml",,,0
		,"Medicinal Use","/entheogens/medicinal.shtml",,,0
		,"Families & Psychoactives","/psychoactives/families/families.shtml",,,0		
		,"Drug Humor","/psychoactives/humor/humor.shtml",,,0
		]);

		addmenu(menu=["community",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Psychoactive Links","/psychoactives/links/links_psychoactives.shtml",,,2		
		,"Vendors","/vendors/vendors.shtml",,,0
		,"Non-English Resources","/lang/lang.shtml",,,0
		,"Calendar Events","/general/calendar/calendar.shtml",,,0
		,"Archived Sites","/archive/archive.shtml",,,0
		]);
		
addmenu(menu=["mind",117,215,140,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
,"Mind & Spirit Index","/spirit/",,,2
,"Spiritual Traditions","show-menu=traditions","/spirit/traditions/",,0
,"Religious Freedom","/freedom/civil_rights/religion/",,,1
,"Breathing","/spirit/breathing/",,,0
,"Dancing","/spirit/dancing/",,,0
,"Devices","/spirit/devices/",,,0
,"Dreaming","/spirit/dreaming/",,,0
,"Drumming","/spirit/drumming/",,,0
,"Entheogens","/entheogens/",,,0
,"Fasting","/spirit/fasting/",,,0
,"Martial Arts","/spirit/martial/",,,0
,"Meditation","/spirit/meditation/",,,0
,"Prayer","/spirit/prayer/",,,0
,"Sweating","/spirit/sweating/",,,0
,"Yoga","show-menu=yoga","/spirit/yoga/",,0
]);

		addmenu(menu=["traditions",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Spiritual Traditions","/spirit/traditions/",,,2
		,"Buddhism","/spirit/traditions/buddhism/buddhism.shtml",,,0
		,"Christianity","/spirit/traditions/christianity/christianity.shtml",,,0
		,"Hinduism","/spirit/traditions/hinduism/hinduism.shtml",,,0
		,"Islam","/spirit/traditions/islam/islam.shtml",,,0
		,"Shamanism","/spirit/traditions/shamanism/shamanism.shtml",,,1
		,"More . . . ","/spirit/traditions/",,,0	
		]);
		
		addmenu(menu=["yoga",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Yoga Vault","/spirit/yoga/",,,2		
		,"Karma Yoga","/spirit/yoga/yoga_karma.shtml",,,0
		,"Bhakti Yoga","/spirit/yoga/yoga_bhakti.shtml",,,0
		,"Jnana Yoga","/spirit/yoga/yoga_jnana.shtml",,,0
		,"Raja Yoga","/spirit/yoga/yoga_raja.shtml",,,1
		,"More . . . ","/spirit/yoga/",,,0	
		]);

addmenu(menu=["freedom",117,318,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
,"Freedom & Law Index","/freedom/",,,2
,"Law & Legislative","show-menu=freedom-law","/freedom/law/law.shtml",,0
,"Courts & Justice","show-menu=courts","/freedom/courts/courts.shtml",,0
,"Police Interactions","/freedom/police/police.shtml",,,0
,"Government","/freedom/government/government.shtml",,,0
,"Elections","/freedom/elections/elections.shtml",,,0
,"Civil Rights","show-menu=civil-rights","/freedom/civil_rights/civil_rights.shtml",,0
,"Activism","/freedom/activism/activism.shtml",,,0
]);

		addmenu(menu=["freedom-law",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Psychoactives Law","/psychoactives/law/law.shtml",,,0
		,"Asset Forfeiture","/freedom/law/forfeiture/forfeiture.shtml",,,0
		]);

		addmenu(menu=["courts",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Jury Nullification","/freedom/courts/jury_nullification/jury_nullification.shtml",,,0
		]);

		addmenu(menu=["civil-rights",,,150,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Freedom of Speech","/freedom/civil_rights/speech/speech.shtml",,,0		
		,"Freedom of Religion","/freedom/civil_rights/religion/religion.shtml",,,0
		,"Right to Privacy","/freedom/civil_rights/privacy/privacy.shtml",,,0
		]);
		
addmenu(menu=["arts",117,434,140,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
,"Culture & Arts Index","/culture/",,,2
,"Visionary Art Vaults","/culture/art/",,,0
,"Character Vaults","/culture/characters/",,,0
,"Guest Columns","/columns/",,,0
,"Burning Man","/culture/burningman/",,,0
,"Event Calendar","/general/calendar/",,,0
]);

addmenu(menu=["library",117,539,130,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
,"Library Index","/library/",,,2
,"The Erowid Review","/library/review/",,,0
,"Book List / Store","show-menu=bookstore","/library/books/a_books.shtml",,0
,"Online Books","show-menu=online_books","/library/books_online/",,0
,"References","/references/",,,0
,"Periodicals","/library/periodicals/periodicals.shtml",,,0
,"Quotes","/library/quotes.shtml",,,0
,"Glossary","/glossary.shtml",,,0
,"Slang Dictionary","/psychoactives/slang/",,,0
]);

		addmenu(menu=["bookstore",,,120,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Book List / Store","/library/books/a_books.shtml",,,2
		,"Books By Title","/library/books/a_books.shtml",,,0
		,"Books By Author","/library/books/a_authors.shtml",,,0
		,"Books By Subject","/library/books/a_subject.shtml",,,0
		]);

		addmenu(menu=["online_books",,,120,1,"",hstyle1,,"left",effect,,,,,,,,,,,,
		,"Online Books Vault","/library/books_online/",,,2
		,"PiHKAL","/library/books_online/pihkal/",,,0
		,"TiHKAL","/library/books_online/tihkal/",,,0
		,"Shulgin Lab Books","/library/books_online/shulgin_labbooks/",,,0
		,"E for Ecstasy","/library/books_online/e_for_ecstasy/",,,1
		,"More . . . ","/library/books_online/",,,0	
		]);
		
// - - - - - - - - - - - - - - - - - D O N A T I O N S  &  A B O U T - - - - - - - - - - - - - - - - - - - - - - 		

addmenu(menu=["about",56,"offset=-130",130,1,"right",hstyle1,,"left",effect,,,,,,,,,,,,
,"About Erowid Index","/general/about/about.shtml",,,2
// - - - - - - - - - - - - - - - - - - - 
,"What's New","/new.php",,,0
,"Erowid FAQ","/general/about/about_faq.shtml",,,0
,"Funding & Support","/general/about/about_funding.shtml",,,0
,"Copyrights","/general/about/about_copyrights.shtml",,,0
,"Announcements","/general/about/about_announcements.shtml",,,0
,"Newsletter","/general/about/about_newsletter.shtml",,,0
,"Submissions","/general/about/about_submissions.shtml",,,0
,"Volunteers","/general/about/about_volunteers.shtml",,,0
,"Site Statistics","/general/stats/stats.shtml",,,0
,"Privacy","/general/about/about_privacy.shtml",,,0
,"Contact","/general/about/about_contact.shtml",,,0
,"Content Disclaimer","/general/about/about_disclaimer.shtml",,,0
]);

addmenu(menu=["donations",74,"offset=-130",130,1,"right",hstyle1,,"left",effect,,,,,,,,,,,,
,"Support Erowid!","/donations/donations.php?src=hb",,,2
,"Make a Donation","/donations/donations_single.php?src=hb",,,0
,"Become a Member","/donations/membership.php?src=hb",,,0
,"Be a Monthly Donor","/donations/donations_pledge.php?src=hb",,,0
,"Donate with PayPal","/donations/donations_paypal.php?src=hb",,,1
,"Gifts","show-menu=gifts","/donations/membership.php?src=hb",,0
]);

		addmenu(menu=["gifts",,,120,1,,hstyle1,,"left",effect,,,,,,,,,,,,
		,"Erowid Newsletter","/donations/incentives_extracts.php",,,0
		,"Erowid Archive CD","/donations/incentives_cd1.php",,,0
		,"Shopping Bag","/donations/incentives_bag1.php",,,0
		,"T-shirts","/donations/incentives_shirt.php",,,0
		,"Sweatshirt","/donations/incentives_shirt.php",,,0
		,"Poetry Magnets","/donations/incentives_magnets.php",,,0
		,"Visionary Poster","/donations/incentives_poster_visionary_synthesis.php",,,0
		,"New & Used Books","/donations/incentives_book.php",,,0
		,"Glass Molecules","/donations/incentives_molecule.php",,,0
		,"Albert Hofmann Signed Blotter Art","/donations/incentives_special5.php",,,0
		]);

// - - - - - - - - - - - - - - - - - F O O T E R - - - - - - - - - - - - - - - - - - - - - - 		

var footer1=[			// style1 is an array of properties. You can have as many property arrays as you need. This means that menus can have their own style.
"AAAAAA",	    // Mouse Off Font Color
"321929",			// Mouse Off Background Color
"ffffff",			// Mouse On Font Color
"321929",			// Mouse On Background Color
"321929",			// Menu Border Color 
11,				  // Font Size in pixels
"normal",			// Font Style (italic or normal)
"bold",			 // Font Weight (bold or normal)
"Arial",			  // Font Name
1,				   // Menu Item Padding
"/includes/headers/images/arrow-right-db.gif",		// Sub Menu Image (Leave this blank if not needed)
,				   // 3D Border & Separator bar
"66ffff",			  // 3D High Color
"000099",			// 3D Low Color
,			// Current Page Item Font Color (leave this blank to disable)
,			 // Current Page Item Background Color (leave this blank to disable)
,	   // Top Bar image (Leave this blank to disable)
"ffffff",			   // Menu Header Font Color (Leave blank if headers are not needed)
"000099",			// Menu Header Background Color (Leave blank if headers are not needed)
"black",			 // Menu Item Separator Color
]

var footer2=[			// style1 is an array of properties. You can have as many property arrays as you need. This means that menus can have their own style.
"000000",	    		// Mouse Off Font Color
"b0b6b4",			// Mouse Off Background Color
"BBBBBB",			// Mouse On Font Color
"321929",			// Mouse On Background Color
"000000",			// Menu Border Color 
10,				  // Font Size in pixels
"normal",			// Font Style (italic or normal)
"bold",			 // Font Weight (bold or normal)
"Verdana,Arial",			  // Font Name
3,				   // Menu Item Padding
"/includes/headers/images/arrow-right-db.gif",		// Sub Menu Image (Leave this blank if not needed)
1,				   // 3D Border & Separator bar
"888888",			  // 3D High Color
"111111",			// 3D Low Color
"321929",			// Current Page Item Font Color (leave this blank to disable)
"9da3a1",			 // Current Page Item Background Color (leave this blank to disable) cb6611
,	   // Top Bar image (Leave this blank to disable)
"ffffff",			   // Menu Header Font Color (Leave blank if headers are not needed)
"000099",			// Menu Header Background Color (Leave blank if headers are not needed)
"black",			 // Menu Item Separator Color
]

/*
addmenu(menu=["footer",,,130,1,,footer1,1,,effect,,,,,,,,,,,,
,"About this Document","show-menu=AboutDoc","/general/document_help/",,2
]);

	addmenu(menu=["AboutDoc",,,190,1,,footer2,,"left",effect,,,,,,,,,,,,
	,"Report an Error / Correction", "javascript:CorrectionsWindow();",,,0
        ,"Request to Use this Document","/general/about/about_copyrights.shtml",,,0
        ,"Contact","/general/about/about_contact.shtml",,,0		      
		      
	]);

	
function CorrectionsWindow()
{	var ThisPage = document.URL;
	var cwin = window.open("/general/document_help/corrections/corrections_report.php?PageURL=" + ThisPage,'document_help','width=530,height=595,resizable,scrollbars=yes');
	cwin.focus();
}
*/

dumpmenus();
