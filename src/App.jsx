import { useState, useEffect } from "react";

const decades = [
  { id: "1910s", label: "1910s", header: "#2A3D1C", accent: "#C8A96E", secondary: "#8B3A1A", paper: "#F2E8D5", silhouette: "M10,40 Q15,20 25,15 Q35,10 40,15 Q50,20 50,35 Q50,50 40,55 Q30,60 20,55 Q10,50 10,40Z M30,15 L30,5 M20,20 L15,10 M40,20 L45,10" },
  { id: "1920s", label: "1920s", header: "#1C2D3F", accent: "#B8A86A", secondary: "#4A7A6A", paper: "#EDE4D0", silhouette: "M5,45 L5,20 Q5,10 15,10 L35,10 Q45,10 45,20 L45,45 Q45,50 40,50 L10,50 Q5,50 5,45Z M15,10 L15,5 M25,10 L25,3 M35,10 L35,5" },
  { id: "1930s", label: "1930s", header: "#4A1C0E", accent: "#C4A44A", secondary: "#2A4A1C", paper: "#F0E6D2", silhouette: "M5,50 L5,25 Q20,5 35,25 L35,50Z M15,25 Q20,15 25,25 M8,38 L32,38" },
  { id: "1940s", label: "1940s", header: "#2A3818", accent: "#C8A96E", secondary: "#6A3A1C", paper: "#EDE4D0", silhouette: "M10,50 L10,20 Q10,8 22,8 Q34,8 34,20 L34,50 M5,20 L40,20 M5,35 L40,35" },
  { id: "1950s", label: "1950s", header: "#1A3040", accent: "#C4A44A", secondary: "#8A4A2A", paper: "#F2E8D5", silhouette: "M5,50 Q5,30 15,25 Q25,20 35,25 Q45,30 45,50 M15,25 Q20,10 30,10 Q38,10 38,20" },
  { id: "1960s", label: "1960s", header: "#2A1C3A", accent: "#B8A86A", secondary: "#1A4A2A", paper: "#EDE4D0", silhouette: "M10,50 L10,30 Q10,15 25,12 Q40,15 40,30 L40,50 M18,12 Q25,5 32,12 M25,12 L25,5" },
  { id: "1970s", label: "1970s", header: "#3A2010", accent: "#C8A96E", secondary: "#2A3A1C", paper: "#F0E6D2", silhouette: "M5,45 Q5,20 15,15 Q25,10 35,15 Q45,20 45,45 L45,50 L5,50Z M15,15 L12,5 M25,10 L25,2 M35,15 L38,5" },
];

const recipes = {
  "1910s": [
    {
      name: "Potted Pigeon",
      region: "Nationwide, with roots in British and French country cooking",
      notable: "Theodore Roosevelt served potted game birds at the White House and was known to favor wild-caught fowl at the table.",
      history: "Potted pigeon was a direct inheritance from Victorian British cooking, where pigeons were among the most affordable meats available. In early 1900s America, squab and pigeon remained standard fare in both rural households and urban working-class kitchens. The dish predates the passenger pigeon extinction in 1914, and its disappearance from American tables tracks closely with the shift away from game birds as everyday protein. By the 1920s, chicken had become cheap enough to replace it entirely.",
      type: "Main",
      difficulty: 3,
      servings: 4,
      description: "Pigeons braised low and slow in a deep earthenware pot with lard, herbs, and root vegetables until tender and falling off the bone.",
      ingredients: ["4 young pigeons, cleaned", "2 tbsp lard", "2 carrots, diced", "1 parsnip, diced", "1 onion, quartered", "1 sprig thyme", "1 bay leaf", "Salt and pepper", "1 cup water or light stock"],
      instructions: ["Season pigeons inside and out with salt and pepper.", "Melt lard in a heavy pot over medium heat and brown pigeons on all sides.", "Add vegetables, herbs, and water. Cover tightly.", "Cook over very low heat for 2½ hours until meat is extremely tender.", "Serve directly from the pot with crusty bread."]
    },
    {
      name: "Crab Louis",
      region: "San Francisco, California; disputed between Solari's restaurant (1911), Seattle's Olympic Club, and the St. Francis Hotel",
      notable: "There is considerable dispute about who created Crab Louis. The Sunset Cookbook (1965) says Solari's in San Francisco was serving it as early as 1911. Victor Hirtzler's Hotel St. Francis Cook Book (1919) includes the recipe. John Mariani's Dictionary of American Food and Drink suggests the Olympic Club at Seattle. No one agrees — but everyone agrees it is a West Coast dish.",
      history: "Crab Louis is one of the defining dishes of West Coast American cuisine, born in San Francisco's restaurant culture in the years before World War I. The recipe appeared in Victor Hirtzler's Hotel St. Francis Cook Book in 1919, the earliest printed version, which calls for arranging lettuce around the inside of a salad bowl, mounding crabmeat on top, covering it with chili-spiked mayonnaise, and garnishing with chives and sliced hard-boiled eggs. The dish spread up and down the Pacific Coast and became the signature salad of West Coast fine dining for fifty years. Its decline was partly a casualty of Dungeness crab becoming more expensive and partly the general retreat of composed main-course salads from American restaurant menus in the 1970s and 80s.",
      type: "Main",
      difficulty: 3,
      servings: 6,
      description: "Dungeness crabmeat mounded on lettuce and dressed with a chili-spiked Louis dressing — the defining salad of West Coast fine dining from 1911 through the 1960s.",
      ingredients: [
        "LOUIS DRESSING: 1½ cups mayonnaise",
        "¼ cup chili sauce",
        "3 tbsp finely minced scallions (include some green tops)",
        "3 tbsp finely minced green bell pepper",
        "1 tbsp fresh lemon juice",
        "1½ tsp Worcestershire sauce",
        "¼ tsp hot red pepper sauce",
        "SALAD: 1½ lbs lump crabmeat (preferably Dungeness), bits of shell and cartilage removed",
        "2 heads Bibb or Boston lettuce, separated into leaves, washed, and spun dry",
        "3 large firm-ripe avocados, halved, pitted, and peeled",
        "2 medium vine-ripe tomatoes, cored and cut into 6 wedges each",
        "3 hard-cooked eggs, peeled and quartered lengthwise"
      ],
      instructions: [
        "LOUIS DRESSING: Whisk together all dressing ingredients in a large bowl.",
        "Add crab to dressing and turn until evenly coated.",
        "Bed lettuce leaves on each of six salad plates.",
        "Mound crab mixture into avocado halves and center on lettuce leaves.",
        "Garnish with tomatoes and hard-cooked eggs, dividing total amounts evenly.",
        "Serve immediately."
      ]
    },
    {
      name: "Clams Casino",
      region: "Narragansett, Rhode Island; created at the Casino at Narragansett Pier in 1917",
      notable: "Mrs. Paran Stevens asked Maître d'Hôtel Julius Keller to create a special dish for her party. When she asked what to call it, Keller replied: 'I shall call it Clams Casino in honor of this restaurant.' The name stuck and the dish spread to every American seafood restaurant.",
      history: "Clams Casino was born in 1917 at the Casino at Narragansett Pier, one of the great seaside resort establishments of the Gilded Age. The combination of clams on the half shell baked with bacon, butter, green pepper, and lemon juice became one of the defining American appetizers of the twentieth century. It spread from Rhode Island down the Eastern Seaboard and eventually nationwide, appearing on the menus of seafood restaurants from Boston to New Orleans. Its decline came with the retreat of the baked shellfish appetizer from restaurant menus in the 1980s and 90s.",
      type: "Appetizer",
      difficulty: 3,
      servings: 4,
      description: "Cherrystone clams on the half shell baked with bacon, butter, anchovy, green pepper, shallots, and pimento — the Rhode Island resort classic that spread to every American seafood restaurant.",
      ingredients: [
        "4 (9-inch) pie pans filled with rock salt",
        "2 dozen raw cherrystone clams on the half shell",
        "¼ cup (½ stick) butter, at room temperature",
        "1 tsp anchovy paste",
        "1 tbsp fresh lemon juice",
        "¼ cup minced green bell pepper",
        "2 tbsp minced shallots",
        "2 tbsp minced pimento",
        "6 slices bacon, each cut crosswise into 4 equal pieces, partially cooked and drained"
      ],
      instructions: [
        "Dampen rock salt with water, set pans in oven, and preheat to 450°F.",
        "Bed six clams in salt in each pan.",
        "Quickly blend butter, anchovy paste, and lemon juice until smooth and slip ½ teaspoon under each clam.",
        "Mix green pepper, shallots, and pimento and sprinkle evenly over clams.",
        "Top each clam with a piece of bacon.",
        "Bake uncovered until bacon is crisp and nicely browned — 6 to 7 minutes.",
        "Serve at once."
      ]
    },
    {
      name: "Oyster Loaf",
      region: "New Orleans, Baltimore, and the Atlantic and Gulf Coasts",
      notable: "New Orleans lore holds that the oyster loaf — locally called a peacemaker or La Médiatrice — was brought home by husbands as a peace offering after a late night out.",
      history: "The oyster loaf has deep roots in New Orleans Creole cooking, where oysters were so abundant in the early twentieth century they were considered a poor man's food. A creamy baked version traveled up the Atlantic Coast where Chesapeake and New England harvests made it a fashionable luncheon centerpiece. Both versions were largely displaced by the modern oyster po'boy and by declining oyster populations throughout the century.",
      type: "Luncheonette",
      difficulty: 3,
      servings: 4,
      description: "A hollowed-out loaf of bread filled with creamed oysters — a fashionable luncheon dish of the era, served hot from the oven.",
      ingredients: ["1 round loaf of white bread", "2 dozen fresh oysters, shucked", "2 tbsp butter", "1 tbsp flour", "1 cup cream", "1 tsp Worcestershire sauce", "Salt, cayenne pepper"],
      instructions: ["Cut top from bread loaf and hollow out interior, reserving crumbs.", "Brush inside with melted butter and toast in oven at 350°F until golden.", "Make a cream sauce: melt butter, whisk in flour, add cream, stir until thick.", "Add oysters to sauce with Worcestershire, season with salt and cayenne.", "Fill bread shell with oyster cream mixture, replace lid, and bake 15 minutes."]
    },
    {
      name: "Boiled Tongue with Raisin Sauce",
      region: "Nationwide; especially prominent in Midwestern and Jewish-American households",
      notable: "Abraham Lincoln's favorite meal reportedly included boiled tongue, and it remained a centerpiece dish in upper-middle-class homes through the early 20th century.",
      history: "Boiled tongue was one of the most widely eaten Sunday dinner dishes in America from the colonial era through the 1940s. The sweet raisin sauce accompaniment came from German and Eastern European Jewish cooking traditions. Tongue remained common in Jewish delicatessens well into the 1960s, and its decline in mainstream homes tracks closely with postwar affluence making it seem less prestigious than whole beef roasts.",
      type: "Main",
      difficulty: 4,
      servings: 6,
      description: "Beef tongue simmered for hours until silky, then sliced and served with a sweet-tart raisin sauce — a Sunday centerpiece dish.",
      ingredients: ["1 beef tongue (3-4 lbs)", "1 onion, halved", "2 bay leaves", "Peppercorns", "1 cup raisins", "1 cup brown sugar", "½ cup cider vinegar", "1 tsp mustard powder", "1 tbsp butter"],
      instructions: ["Simmer tongue in water with onion, bay leaves, and peppercorns for 3-4 hours.", "Remove and peel skin while still warm.", "For sauce: combine raisins, sugar, vinegar, and mustard in a saucepan. Simmer 15 min.", "Finish sauce with butter.", "Slice tongue thinly and serve topped with warm raisin sauce."]
    },
    {
      name: "Chafing Dish Rabbit",
      region: "Urban East Coast; fashionable in New York, Boston, and Philadelphia supper clubs",
      notable: "The chafing dish was the centerpiece of Edwardian chafing dish parties, popularized by Fannie Farmer's 1898 book Chafing Dish Possibilities.",
      history: "Welsh Rarebit arrived in America from Britain in the 18th century, but the Edwardian craze for chafing dish cookery turned it into a social ritual. The chafing dish, an alcohol-fueled table cooking apparatus, allowed hosts to prepare food dramatically in front of guests, and Welsh Rarebit was its signature dish. By the 1910s, chafing dish supper parties were so fashionable that department stores sold elaborate sets. The dish faded as electric appliances replaced chafing dishes and formal at-home entertaining declined after World War I.",
      type: "Luncheonette",
      difficulty: 2,
      servings: 4,
      description: "A Welsh Rarebit variation served in a chafing dish at the table — melted cheese sauce with ale, ladled over toast, a staple of Edwardian suppers.",
      ingredients: ["1 lb sharp cheddar, grated", "½ cup dark ale or stout", "1 tsp dry mustard", "1 tsp Worcestershire sauce", "Pinch cayenne", "2 egg yolks", "Toast points for serving"],
      instructions: ["In the top pan of a chafing dish or double boiler, warm ale gently.", "Add cheese in handfuls, stirring constantly until melted.", "Stir in mustard, Worcestershire, and cayenne.", "Beat egg yolks and stir in slowly — do not boil.", "Serve immediately over toast points at the table."]
    },
    {
      name: "Creamed Dried Beef on Toast",
      region: "Nationwide, particularly prevalent in the rural Midwest and South",
      notable: "U.S. Army mess halls served this so routinely during both World Wars that soldiers gave it the unprintable nickname SOS — a name that stuck for generations.",
      history: "Dried beef on toast predates the Civil War, when preserved beef was one of the few proteins that could survive without refrigeration. Creaming it with a white sauce was a standard technique for making it palatable and stretching it further. The Army adopted it for logistical reasons, and it was served in such quantities and of such variable quality that it acquired its famous nickname. Postwar, its association with institutional food gave it a stigma from which it never recovered.",
      type: "Luncheonette",
      difficulty: 2,
      servings: 4,
      description: "Thin-sliced salt-dried beef folded into a thick cream sauce and served over toast — a working-class staple that predates its Army reputation.",
      ingredients: ["4 oz dried beef, thinly sliced", "2 tbsp butter", "2 tbsp flour", "2 cups whole milk", "Black pepper"],
      instructions: ["Rinse dried beef in warm water to reduce saltiness; pat dry.", "Tear into bite-size pieces.", "Melt butter, whisk in flour, cook 1 minute.", "Add milk gradually, whisking until thick and smooth.", "Fold in beef, season generously with black pepper.", "Serve over thick-cut white toast."]
    },
    {
      name: "Lobster Newberg",
      region: "New York City; Delmonico's Restaurant on Beaver Street",
      notable: "Created at Delmonico's around 1876 for sea captain Ben Wenberg — originally called Lobster Wenberg until Wenberg had a falling out with the restaurant and the name was reversed to Newberg.",
      history: "Lobster Newberg is one of the most famous dishes in American culinary history, born at Delmonico's — the country's first true fine dining restaurant. A sea captain taught the chef his formula for cooking lobster in a rich cream and sherry reduction, and the dish became the most requested item on the menu almost overnight. By the 1910s it had spread to hotel dining rooms across the country. Its decline came partly from rising lobster prices and partly from a shift away from cream-enriched Edwardian sauces.",
      type: "Main",
      difficulty: 4,
      servings: 4,
      description: "A grand dining room dish: lobster in a sherry and cream sauce enriched with egg yolks, served in a chafing dish or over toast points.",
      ingredients: ["2 lbs cooked lobster meat, cut in chunks", "4 tbsp butter", "½ cup dry sherry", "2 cups heavy cream", "4 egg yolks", "Pinch nutmeg", "Pinch cayenne", "Salt"],
      instructions: ["Melt butter in a large skillet. Add lobster and cook 2 minutes.", "Pour in sherry and let it reduce by half.", "Add cream and bring to a simmer.", "Beat yolks and temper with a ladle of hot cream. Pour back into pan.", "Stir gently over low heat until sauce thickens. Do not boil.", "Season with nutmeg, cayenne, and salt. Serve immediately."]
    },
    {
      name: "Molded Chicken Aspic",
      region: "Nationwide; a staple of hotel and club dining from New York to San Francisco",
      notable: "Aspic molds were featured at White House state dinners of the early 20th century, and Fannie Farmer devoted an entire chapter to them in her landmark 1896 cookbook.",
      history: "The introduction of powdered gelatin in the 1890s democratized the aspic form, and suddenly home cooks could produce the glistening molded centerpieces previously seen only in professional kitchens. Chicken aspic was a cold luncheon fixture for decades. Its death came swiftly in the postwar era, when gelatin became associated with cheaper sweet molds rather than serious cooking.",
      type: "Main",
      difficulty: 4,
      servings: 6,
      description: "Cooked chicken suspended in a glistening savory gelatin, unmolded at the table — a showpiece of Edwardian cold luncheons.",
      ingredients: ["2 cups cooked chicken, diced", "3 cups strong chicken stock", "2 envelopes unflavored gelatin", "1 stalk celery, minced", "2 tbsp parsley, chopped", "Salt and white pepper"],
      instructions: ["Dissolve gelatin in ¼ cup cold stock. Heat remaining stock and stir in gelatin.", "Add chicken, celery, and parsley. Season to taste.", "Pour into a ring mold or loaf pan. Chill until firm, at least 4 hours.", "Unmold onto a platter lined with lettuce leaves.", "Serve with mayonnaise or a sharp vinaigrette."]
    },
    {
      name: "Pickled Pigs' Feet",
      region: "The American South and Midwest; German immigrant communities",
      notable: "Ulysses S. Grant was said to be particularly fond of pickled pigs' feet, reportedly enjoying them as a late-night snack in the White House.",
      history: "Pickled pigs' feet are among the oldest preserved foods in American culture, brought by German, British, and West African foodways that all independently valued the pig's extremities. In the South, they were closely tied to African American cooking traditions where whole-hog butchery ensured nothing was wasted. Jars sat on the counters of general stores and taverns well into the mid-twentieth century before being displaced by processed snack foods.",
      type: "Appetizer",
      difficulty: 3,
      servings: 4,
      description: "Boiled pigs' feet preserved in a spiced vinegar brine — a common cold shelf staple eaten as a snack or alongside beans.",
      ingredients: ["4 pigs' feet, split", "1 onion, sliced", "2 cups cider vinegar", "1 cup water", "1 tbsp pickling spice", "2 tsp salt", "1 tsp red pepper flakes"],
      instructions: ["Simmer pigs' feet in salted water with onion for 3-4 hours until very tender.", "Pack into clean jars.", "Combine vinegar, water, pickling spice, salt, and pepper flakes; boil 5 min.", "Pour hot brine over pigs' feet. Seal and refrigerate.", "Best after 3 days. Eat cold."]
    },
    {
      name: "Corn Oysters",
      region: "The American South and Mid-Atlantic states; especially Virginia and the Carolinas",
      notable: "Mary Randolph included a version in The Virginia Housewife (1824), one of the first truly American cookbooks, cementing its place in Southern culinary tradition.",
      history: "Corn oysters appear in American cookbooks as early as the 1820s. The name was a form of flattery — comparing a humble corn fritter to the prized oyster — and a reflection of their visual similarity when fried. They were summer food, made when corn was freshest. The dish faded as the specific oyster fritter form was gradually forgotten in favor of more generic cornbread preparations.",
      type: "Side",
      difficulty: 2,
      servings: 4,
      description: "Fried corn fritters so named because their shape and richness were thought to mimic oysters — a thrifty and beloved side dish.",
      ingredients: ["2 cups fresh corn kernels (or canned)", "2 eggs, beaten", "½ cup flour", "½ tsp salt", "¼ tsp black pepper", "Lard or bacon fat for frying"],
      instructions: ["Mix corn, eggs, flour, salt, and pepper into a thick batter.", "Heat ¼ inch of lard in a cast iron skillet over medium heat.", "Drop batter by large spoonfuls. Flatten slightly.", "Fry 3-4 minutes per side until deep golden brown.", "Drain and serve hot."]
    },
    {
      name: "Scalloped Tomatoes",
      region: "Nationwide; a New England and Mid-Atlantic staple particularly",
      notable: "Recipes for scalloped tomatoes appear in virtually every American cookbook published between 1880 and 1940, including multiple editions of the Boston Cooking School Cookbook.",
      history: "Scalloped tomatoes were a year-round staple once canned tomatoes became widely available after the 1880s. The dish required almost no skill, used cheap pantry ingredients, and was found on hotel menus, in school lunch programs, and at every church supper. Its disappearance is a genuine culinary mystery — the dish is objectively delicious and requires almost no effort.",
      type: "Side",
      difficulty: 1,
      servings: 6,
      description: "Canned or fresh tomatoes baked with buttered breadcrumbs in layers — simple, savory, and ubiquitous on the 1910s table.",
      ingredients: ["2 lbs ripe tomatoes, sliced (or 1 large can)", "2 cups day-old bread cubes", "3 tbsp butter, melted", "1 small onion, minced", "1 tsp sugar", "Salt and pepper"],
      instructions: ["Preheat oven to 375°F. Butter a baking dish.", "Toss bread cubes with melted butter.", "Layer tomatoes and bread in dish, seasoning each layer with salt, pepper, sugar, and onion.", "End with a bread layer.", "Bake 35-40 minutes until top is golden and tomatoes are bubbling."]
    },
    {
      name: "Baked Bean Soup",
      region: "New England, particularly Boston, where baked beans were a Saturday-night and Sunday-morning institution",
      notable: "Boston's historic Durgin-Park restaurant, open from 1827 to 2019, served baked bean soup continuously for nearly two centuries.",
      history: "In New England, baked beans were traditionally prepared on Saturday — Puritan custom forbade cooking on the Sabbath — and stretched into soup on Monday. This thrifty cycle was so ingrained that Boston became nicknamed Beantown. Senate Bean Soup, still served in the U.S. Capitol daily since 1903, is a close cousin.",
      type: "Soup",
      difficulty: 2,
      servings: 6,
      description: "Leftover baked beans thinned with stock and seasoned — a Monday staple when Sunday's beans needed using up.",
      ingredients: ["2 cups leftover baked beans", "4 cups ham or pork stock", "1 onion, minced", "1 stalk celery, minced", "1 tsp mustard", "Salt and pepper", "Croutons to serve"],
      instructions: ["Sauté onion and celery in a little fat until soft.", "Add beans and stock. Simmer 20 minutes.", "Puree half the soup for a thicker texture, leaving some beans whole.", "Stir in mustard. Season to taste.", "Serve with croutons floating on top."]
    },
    {
      name: "Veal Loaf with Hard-Boiled Eggs",
      region: "Urban East Coast and Midwest; a staple of German-American household cooking",
      notable: "Fannie Farmer's Boston Cooking School Cookbook (1896) featured multiple veal loaf variations; it was considered a more refined alternative to beef-based meat loaf.",
      history: "Veal loaf occupied a higher social register than beef meat loaf — veal was considered more delicate and fashionable. The trick of hiding whole hard-boiled eggs inside was both practical and theatrical: the cross-section of egg and meat made a striking presentation. As veal became expensive and fell out of fashion due to animal welfare concerns in the 1970s and 80s, this dish vanished almost entirely.",
      type: "Main",
      difficulty: 2,
      servings: 8,
      description: "Ground veal formed into a loaf with whole hard-boiled eggs hidden inside — sliced to reveal a decorative cross-section, perfect for cold suppers.",
      ingredients: ["2 lbs ground veal", "½ lb ground pork", "4 hard-boiled eggs, peeled", "1 cup breadcrumbs", "2 raw eggs", "1 onion, minced", "1 tsp sage", "Salt and pepper"],
      instructions: ["Mix ground meats, raw eggs, breadcrumbs, onion, sage, salt, and pepper.", "Pat half the mixture into a loaf pan.", "Lay hard-boiled eggs end-to-end down the center.", "Cover with remaining meat mixture. Press firmly.", "Bake at 350°F for 1¼ hours. Cool before slicing."]
    },
    {
      name: "Ribbon Sandwiches",
      region: "Nationwide; associated with women's club luncheons, bridge clubs, and church teas",
      notable: "The ribbon sandwich was a fixture at suffragette fundraising teas in the 1910s, where elaborate presentation was considered essential to signal respectability.",
      history: "The ribbon sandwich was pure Edwardian ingenuity — alternating layers of white and whole wheat bread with contrasting fillings, pressed and sliced crosswise, producing a geometric striped effect that looked far more elaborate than the effort involved. They were the centerpiece of the American ladies' lunch circuit: bridge clubs, garden parties, church socials, and hospital auxiliaries. As formal daytime entertaining faded, the ribbon sandwich became a casualty of changing social structure.",
      type: "Luncheonette",
      difficulty: 2,
      servings: 12,
      description: "Stacked layers of white and brown bread with fillings of cream cheese and olive, pimento, or deviled ham — sliced to show colorful stripes, a ladies' tea classic.",
      ingredients: ["8 slices white bread", "8 slices whole wheat bread", "8 oz cream cheese, softened", "¼ cup stuffed olives, minced", "¼ cup pimentos, minced", "Soft butter"],
      instructions: ["Mix cream cheese with olives; set aside.", "Mix softened butter with pimentos; set aside.", "Alternate 3 slices (white, wheat, white) with different fillings between each layer.", "Wrap tightly in wax paper and refrigerate 1 hour.", "Trim crusts. Slice crosswise to reveal ribbon pattern."]
    },
    {
      name: "Prune Whip",
      region: "Nationwide; a standard in hospital cooking and domestic science curricula across the country",
      notable: "Prune whip was a staple dessert in the White House kitchen during the Wilson administration, and appeared on the menus of the first-class dining room of the RMS Titanic in April 1912.",
      history: "Prune whip was among the most widely published dessert recipes in America from the 1880s through the 1940s. Prunes appeared in scientific diet plans and hospital menus as a digestive aid, and folding them into beaten egg whites produced a light, elegant dessert. Its demise came on two fronts: prunes acquired an unfortunate association with the elderly, and the labor-intensive egg-white beating became unappealing once richer, easier desserts became available.",
      type: "Dessert",
      difficulty: 2,
      servings: 4,
      description: "Stewed prunes folded into stiff egg whites and chilled — elegant yet humble, this appeared on fashionable and everyday tables alike.",
      ingredients: ["1 cup dried prunes", "¼ cup sugar", "1 tbsp lemon juice", "3 egg whites", "Pinch salt", "Whipped cream for serving"],
      instructions: ["Simmer prunes in water until very soft. Drain and puree.", "Stir sugar and lemon juice into warm puree.", "Beat egg whites with salt to stiff peaks.", "Fold prune puree gently into whites.", "Spoon into glasses and chill 1 hour.", "Serve topped with whipped cream."]
    },
    {
      name: "Boiled Cider Pie",
      region: "New England, particularly Vermont, New Hampshire, and western Massachusetts",
      notable: "The American Antiquarian Society has documented recipes for this pie going back to the 1780s, making it one of the oldest distinctly American pie traditions.",
      history: "Boiled cider pie is among the oldest surviving New England desserts, born from the simple logic of apple-growing country: when you have more cider than you can drink, you boil it down to a thick syrup and use it to sweeten everything. Before cane sugar was widely affordable, this was how farm families sweetened their pies. The dish never traveled far beyond Vermont and New Hampshire, and even there it became increasingly rare after World War II.",
      type: "Dessert",
      difficulty: 3,
      servings: 8,
      description: "A New England farmhouse pie made with reduced apple cider as a sweetener — intensely apple-flavored, barely sweet, profoundly old-fashioned.",
      ingredients: ["1 cup boiled cider (reduced from 4 cups fresh cider)", "3 eggs, beaten", "1 cup sugar", "2 tbsp butter, melted", "1 tsp cinnamon", "¼ tsp allspice", "1 unbaked 9-inch pie shell"],
      instructions: ["Preheat oven to 400°F.", "Boil 4 cups apple cider in a saucepan until reduced to 1 cup.", "Whisk together eggs, sugar, butter, spices, and boiled cider.", "Pour into unbaked pie shell.", "Bake 10 min at 400°F, then reduce to 325°F and bake 30-35 min until set.", "Cool completely before slicing."]
    },
    {
      name: "Pimento Cream Cheese Sandwich",
      region: "The American South; pimento cheese is particularly associated with Georgia, the Carolinas, and Virginia",
      notable: "Pimento cheese is called 'the caviar of the South' — it is served at the Masters Tournament in Augusta every year, where it costs $1.50 and has not changed since 1949.",
      history: "Pimento cream cheese began appearing in American cookbooks and advertisements around 1908, when cream cheese manufacturers began promoting it as a spread. The combination of cream cheese and canned pimentos was a product of the new processed food industry. In the South, it evolved into something far more personal — every family had their own recipe, often passed down for generations without being written down. The Masters Tournament's pimento cheese sandwich has been priced at $1.50 since 1949, making it one of the most underpriced foods in American sports.",
      type: "Luncheonette",
      difficulty: 1,
      servings: 4,
      description: "The Southern lunch counter classic — cream cheese, pimentos, sharp cheddar, and a touch of heat, spread generously on white bread.",
      ingredients: ["8 oz cream cheese, softened", "1 cup sharp cheddar, finely grated", "1 jar (4 oz) diced pimentos, drained", "2 tbsp mayonnaise", "½ tsp onion powder", "¼ tsp cayenne pepper", "Salt and black pepper", "White sandwich bread"],
      instructions: ["Beat cream cheese until smooth.", "Mix in cheddar, pimentos, and mayonnaise.", "Season with onion powder, cayenne, salt, and pepper.", "Refrigerate at least 1 hour — it firms up and the flavors meld.", "Spread generously on plain white bread.", "Trim crusts for a proper luncheonette presentation.", "Serve with a pickle spear and potato chips alongside."]
    },
    {
      name: "Tomato Soup with Crackers",
      region: "Nationwide; Campbell's Tomato Soup, introduced in 1897, made this the most widely eaten soup in American history",
      notable: "Andy Warhol's 1962 Campbell's Soup Cans was inspired by the fact that he ate tomato soup for lunch every day for twenty years. The painting turned the most ordinary American lunch into high art.",
      history: "Campbell's condensed tomato soup, introduced in 1897, became the best-selling canned product in American history within a decade. The combination of tomato soup and crackers — usually oyster crackers or saltines — was the standard American lunch counter offering from the 1900s through the 1960s. It cost a dime at most counters. Its decline as a serious lunch item came with the rise of fast food and the sandwich culture of the 1970s, though it never fully disappeared.",
      type: "Luncheonette",
      difficulty: 1,
      servings: 2,
      description: "The ten-cent American lunch — tomato soup made from condensed Campbell's, prepared with milk for richness, served with oyster crackers. Humble, perfect, and entirely of its era.",
      ingredients: ["1 can (10.75 oz) Campbell's condensed tomato soup", "1 can whole milk (same measure as soup)", "1 tbsp butter", "Pinch of sugar", "Salt and black pepper", "Oyster crackers or saltines to serve"],
      instructions: ["Empty condensed soup into a saucepan.", "Fill the empty can with whole milk. Add to pot.", "Heat over medium, stirring constantly — do not boil.", "Add butter, pinch of sugar, salt, and pepper.", "Serve in a wide, shallow bowl.", "Float oyster crackers on top.", "This is exactly how it was made at every lunch counter in America for sixty years."]
    },
    {
      name: "Cucumber Cream Cheese Sandwich",
      region: "Nationwide; particularly associated with ladies' luncheons, bridge parties, and afternoon tea culture in the 1910s-1950s",
      notable: "The Lunken Airport counter menu listed 'American Cream Cheese' as a standalone sandwich at 15 cents — the cucumber variation was the more refined luncheon version of the same idea, served at hotel tea rooms and women's club luncheons across the country.",
      history: "Cucumber and cream cheese on white bread was the quintessential ladies' luncheon sandwich of the early 20th century. It came directly from the British tradition of afternoon tea, where delicate crustless finger sandwiches with mild, cooling fillings were considered appropriately refined. In America, it became the standard offering at bridge parties, garden parties, and women's club luncheons from the 1910s through the 1950s. The sandwich's association with a particular kind of formal feminine socializing — which faded dramatically after World War II — is exactly why it disappeared. The socializing changed; the sandwich went with it.",
      type: "Luncheonette",
      difficulty: 1,
      servings: 8,
      description: "Thin-sliced cucumber on cream cheese, on crustless white bread — the ladies' luncheon sandwich that defined a specific era of American social life.",
      ingredients: ["1 English cucumber, very thinly sliced", "8 oz cream cheese, softened", "2 tbsp fresh dill or chives, minced", "1 tsp lemon juice", "Salt and white pepper", "Thin white sandwich bread, crusts removed"],
      instructions: ["Salt cucumber slices lightly and let sit 10 minutes to draw out moisture.", "Pat completely dry with paper towels — wet cucumber ruins the bread.", "Beat cream cheese with herbs, lemon juice, salt, and white pepper until smooth.", "Spread cream cheese generously on one side of each bread slice.", "Lay cucumber slices in a single, slightly overlapping layer.", "Top with second slice. Press gently.", "Trim all four crusts with a sharp knife.", "Cut into rectangles or triangles — never squares.", "Arrange on a plate with the cut sides showing.", "Serve immediately — these do not keep."]
    },
    {
      name: "Olive and Cream Cheese Sandwich",
      region: "Nationwide; documented in American cookbooks since 1909; the Lunken Airport menu listed both 'American Cream Cheese' and 'Pimento Cream Cheese' — the olive variation was the cocktail party and luncheon version of the same base",
      notable: "The olive and cream cheese sandwich appeared on the Lunken Airport counter alongside its pimento cousin — both were variations on the cream cheese sandwich template that American dairy companies had been promoting since the early 1900s. Philadelphia Cream Cheese ran advertisements featuring olive spreads throughout the 1920s and 30s.",
      history: "Chopped olives folded into cream cheese appeared in American cookbooks as early as 1909, promoted heavily by cream cheese manufacturers seeking to expand the product's uses beyond cheesecake. The combination became a standard finger sandwich filling at ladies' luncheons and cocktail parties. Pimento-stuffed green olives were the most common choice, their briny, slightly sweet flavor contrasting with the cream cheese's richness. The sandwich peaked in the 1930s and 40s and faded by the 1960s as processed spreads replaced homemade ones and cocktail party culture changed.",
      type: "Luncheonette",
      servings: 8,
      description: "Chopped pimento-stuffed olives folded into cream cheese, spread on white bread — a cocktail party and luncheon staple from 1909 through the 1950s.",
      ingredients: ["8 oz cream cheese, softened", "½ cup pimento-stuffed green olives, finely chopped", "2 tbsp olive brine", "1 tsp onion, very finely grated", "Black pepper", "White sandwich bread or crackers"],
      instructions: ["Beat cream cheese until smooth.", "Fold in chopped olives, olive brine, and grated onion.", "Season with black pepper — the olives provide all the salt needed.", "Refrigerate 1 hour — the flavors meld and the spread firms up.", "Spread on thin white bread for sandwiches, or serve with crackers.", "For sandwiches: trim crusts and cut into fingers.", "For a cocktail party presentation: spread on rounds of white bread.", "This keeps refrigerated for 3 days — it's better on day two."]
    },
    {
      name: "Wheatcakes",
      region: "Nationwide; a working-class breakfast staple at diners and lunch counters from the 1890s through the 1940s, particularly in the industrial Northeast and Midwest",
      notable: "Charlie Chaplin name-dropped wheatcakes as a personal favorite in a New York Times interview, noting he ordered them whenever he could find them. Every diner had them once — they were the pancake before the pancake took over.",
      history: "Wheatcakes predate the modern pancake as America's standard breakfast griddle cake. Made with whole wheat flour rather than bleached white, and often enriched with molasses, they were denser, more filling, and more nutritious than the fluffy white pancakes that replaced them. They were the working man's breakfast — something that would sustain a laborer through a morning shift in a factory or on a construction site. The rise of refined white flour, commercial pancake mixes like Aunt Jemima, and the postwar preference for lighter, fluffier food drove wheatcakes off menus by the 1950s. They survive today mainly in farmhouse cooking and among people who specifically seek out whole grain alternatives.",
      type: "Luncheonette",
      difficulty: 1,
      servings: 4,
      servings: 8,
      description: "The forgotten American griddle cake — made with whole wheat flour and a touch of molasses, denser and more sustaining than modern pancakes. The working man's breakfast before pancake mix arrived.",
      ingredients: ["1 cup whole wheat flour", "½ cup all-purpose flour", "2 tsp baking powder", "½ tsp baking soda", "½ tsp salt", "1 tbsp molasses", "1 egg", "1¼ cups buttermilk", "2 tbsp melted butter", "Butter and maple syrup to serve"],
      instructions: ["Whisk together both flours, baking powder, baking soda, and salt.", "In a separate bowl, beat egg, buttermilk, molasses, and melted butter.", "Fold wet ingredients into dry until just combined — lumps are fine.", "Heat a cast iron griddle or skillet over medium heat. Grease with butter.", "Pour batter in ¼-cup portions onto hot griddle.", "Cook until bubbles form and edges look set — about 3 minutes.", "Flip once. Cook another 2 minutes.", "Serve with plenty of butter and maple syrup.", "These are denser than modern pancakes — that is correct and intentional."]
    },
  ],

  "1920s": [
    {
      name: "Deviled Kidneys",
      region: "Urban East Coast; carried over from British breakfast traditions in New York and Boston hotels",
      notable: "Deviled kidneys were a standard dish at Delmonico's and the Waldorf-Astoria, remaining on the menu at New York's finest hotel dining rooms through the 1920s.",
      history: "Deviled kidneys came directly from English breakfast culture, where organ meats were considered appropriate and energizing morning fare. Deviling — coating food in mustard and cayenne before broiling — was a Victorian technique that made otherwise mild offal intensely flavorful. In America the dish was primarily eaten at upscale hotel breakfasts and men's club luncheons. The decline of formal breakfast culture and changing attitudes toward organ meats made it vanish in a single generation.",
      type: "Breakfast/Main",
      difficulty: 3,
      servings: 4,
      description: "Lamb kidneys split, coated in mustard and cayenne, and quickly broiled — a popular breakfast and luncheon dish that vanished from American tables by mid-century.",
      ingredients: ["6 lamb kidneys", "2 tbsp Dijon mustard", "1 tsp cayenne pepper", "1 tbsp Worcestershire sauce", "2 tbsp butter, melted", "Salt", "Toast for serving"],
      instructions: ["Split kidneys lengthwise and remove the white core.", "Mix mustard, cayenne, Worcestershire, and butter into a paste.", "Coat kidneys thoroughly in the mixture.", "Broil on a hot rack 4-5 minutes per side.", "Season with salt. Serve immediately on buttered toast."]
    },
    {
      name: "Pressed Chicken",
      region: "The American South and Midwest; a cornerstone of church social and picnic culture",
      notable: "Pressed chicken appears in nearly every church cookbook and community fundraising recipe collection published between 1890 and 1950.",
      history: "Pressed chicken was the dish you made for a crowd when serving hot food was impractical. The technique used the natural gelatin in chicken bones to set the mold without commercial gelatin. It traveled well, sliced neatly, and could feed twenty people from a single large chicken. Its decline mirrors the decline of the church potluck as a social institution and the rise of deli-counter alternatives.",
      type: "Main",
      difficulty: 3,
      servings: 8,
      description: "Cooked chicken packed into a mold with its own jellied broth, then pressed overnight and sliced cold — standard at church suppers and club luncheons.",
      ingredients: ["1 whole chicken", "1 onion", "2 bay leaves", "Salt and pepper", "2 tsp gelatin per cup of broth", "Fresh parsley"],
      instructions: ["Simmer chicken with onion and bay leaves until very tender. Remove and cool.", "Pick all meat from bones. Strain and degrease broth.", "Dissolve gelatin in broth (2 tsp per cup).", "Layer chicken and parsley in a loaf pan; pour broth over to cover.", "Press with a weighted plate. Refrigerate overnight. Unmold and slice."]
    },
    {
      name: "Finnan Haddie Cream",
      region: "New England, particularly Boston and coastal Massachusetts",
      notable: "President Franklin D. Roosevelt was a devoted fan of creamed finnan haddie, often requesting it at the White House for Sunday breakfasts.",
      history: "Finnan haddie — smoked haddock, named for the Scottish fishing village of Findon — arrived in America through the Scottish and Nova Scotian fishing communities of New England. By the early 20th century it was standard on Boston breakfast menus. The combination of smoke, salt, and cream made it intensely savory. Fannie Farmer featured it prominently in her Boston Cooking School Cookbook. Its disappearance is partly due to declining haddock populations in the North Atlantic, and partly due to the general American retreat from fish at breakfast.",
      type: "Main",
      difficulty: 2,
      servings: 4,
      description: "Smoked haddock poached in milk and served in a rich cream sauce — a common breakfast and lunch dish that has nearly vanished from American menus.",
      ingredients: ["1½ lbs finnan haddie (smoked haddock)", "2 cups milk", "3 tbsp butter", "3 tbsp flour", "1 cup cream", "White pepper", "Toast or rice to serve"],
      instructions: ["Poach smoked haddock in milk over low heat for 15 minutes.", "Remove fish; reserve poaching milk.", "Make white sauce: melt butter, whisk in flour, add reserved milk and cream.", "Flake fish into sauce, removing any bones.", "Season with white pepper. Serve over toast or rice."]
    },
    {
      name: "Eggs à la King",
      region: "Nationwide; the à la King preparation was associated with New York hotel dining and spread rapidly to home kitchens",
      notable: "The dish was modeled on Chicken à la King, attributed to several New York establishments including the Brighton Beach Hotel and Delmonico's in the 1890s.",
      history: "The à la King preparation — a cream sauce enriched with sherry, mushrooms, and pimentos — was one of the dominant flavor profiles of early twentieth-century American cooking. Home cooks applied the same sauce to whatever protein was on hand: tuna, shrimp, turkey, and hard-boiled eggs. The egg version was particularly common during Prohibition because it could be made cheaply from pantry staples. The entire à la King tradition faded in the 1960s as cream-heavy sauces fell from fashion.",
      type: "Main",
      difficulty: 2,
      servings: 4,
      description: "The egg cousin of Chicken à la King — hard-boiled eggs in a cream and sherry sauce with pimentos and mushrooms, served over toast points or in pastry shells.",
      ingredients: ["6 hard-boiled eggs, sliced", "2 cups mushrooms, sliced", "¼ cup pimentos", "3 tbsp butter", "3 tbsp flour", "2 cups milk", "¼ cup cream sherry", "Salt, white pepper"],
      instructions: ["Sauté mushrooms in butter until golden.", "Whisk in flour, then milk. Stir until smooth and thick.", "Add sherry and pimentos.", "Fold in sliced eggs gently.", "Season and serve in pastry shells or over toast points."]
    },
    {
      name: "Ham Timbales",
      region: "Nationwide; particularly fashionable in the women's club luncheon circuit from New York to Chicago",
      notable: "Timbales appeared at Woodrow Wilson's White House luncheons and were a staple of formal hotel dining from the 1900s through the 1930s.",
      history: "A timbale is a French-derived technique: a savory mixture bound with egg and cream, baked in a mold, and unmolded for service. American home economists adopted the form in the early 1900s, seeing it as a way to produce elegant presentation from humble ingredients. During Prohibition, when hosts could not serve cocktails and needed food to carry the social weight of a party, elegant presentations like timbales became especially important.",
      type: "Main",
      difficulty: 3,
      servings: 6,
      description: "Individual baked custards made with minced ham, served unmolded — an elegant Prohibition-era luncheon dish that required no alcohol to impress.",
      ingredients: ["2 cups ham, finely minced", "3 eggs", "1½ cups milk", "2 tbsp butter, melted", "1 tsp dry mustard", "Salt, white pepper", "Cream sauce to serve"],
      instructions: ["Preheat oven to 325°F. Butter 6 ramekins.", "Beat eggs, milk, butter, and mustard together.", "Fold in minced ham. Season.", "Fill ramekins ¾ full.", "Set in a water bath and bake 35-40 minutes until set.", "Run a knife around edges, unmold, and serve with cream sauce."]
    },
    {
      name: "Chop Suey (American Style)",
      region: "Nationwide; Chinese-American restaurants spread from San Francisco and New York throughout the country",
      notable: "Li Hung Chang, a Chinese diplomat who visited New York in 1896, was falsely credited with inventing chop suey — a myth the American press happily perpetuated for decades.",
      history: "American chop suey has almost nothing to do with any dish from China. Food historians believe it evolved in Chinese immigrant railroad and mining camps in the American West. The dish exploded in popularity after Li Hung Chang's 1896 American visit. By the 1920s, chop suey restaurants had opened in virtually every American city, often the first exotic restaurant in many small towns. The American version was so thoroughly transformed that Chinese-Americans often referred to it dismissively as American food.",
      type: "Main",
      difficulty: 2,
      servings: 4,
      description: "The wildly popular Americanized Chinese dish of the era — not authentic Chinese cuisine, but a beloved stir of celery, bean sprouts, and meat in thick brown gravy over rice.",
      ingredients: ["1 lb pork or chicken, cut in strips", "3 cups bean sprouts", "4 stalks celery, sliced", "1 large onion, sliced", "1 cup mushrooms", "2 tbsp soy sauce", "1 tbsp cornstarch", "1 cup chicken broth"],
      instructions: ["Stir-fry meat over high heat until browned. Remove.", "Stir-fry onion and celery 3 minutes.", "Add bean sprouts and mushrooms, cook 2 more minutes.", "Return meat. Add broth and soy sauce.", "Mix cornstarch with 2 tbsp cold water; stir into pan to thicken.", "Serve over steamed white rice."]
    },
    {
      name: "Tomato Aspic Ring",
      region: "Nationwide; particularly fashionable in the South, where aspic traditions ran deep",
      notable: "Tomato aspic was a signature item at Junior League luncheons across the South from the 1920s through the 1960s, and remains one of the few aspic preparations still made in some Southern households today.",
      history: "Tomato aspic was the most successful of all the savory gelatin dishes because it tasted genuinely delicious — the combination of tangy tomato, Worcestershire, and Tabasco in a cold, clean gel was refreshing rather than unsettling. In the South, where cold luncheons were summer staples, it became an institution. Its decline in the North was swift after the 1960s, but in certain Southern cities it lingered on restaurant menus well into the 1980s.",
      type: "Side",
      difficulty: 3,
      servings: 8,
      description: "Spiced tomato juice set in gelatin, molded in a ring, and filled with cream cheese or shrimp salad — the height of Jazz Age entertaining.",
      ingredients: ["3 cups tomato juice", "2 envelopes unflavored gelatin", "1 tsp sugar", "1 tsp Worcestershire sauce", "Dash Tabasco", "1 tsp onion juice", "Cream cheese or shrimp salad to fill"],
      instructions: ["Soften gelatin in ½ cup cold tomato juice.", "Heat remaining juice; stir in softened gelatin until dissolved.", "Add sugar, Worcestershire, Tabasco, and onion juice.", "Pour into a ring mold. Chill until firm, at least 3 hours.", "Unmold on a platter. Fill center with cream cheese or shrimp salad.", "Serve on lettuce leaves."]
    },
    {
      name: "Creamed Peas and New Potatoes",
      region: "Nationwide; a universal American spring and early summer dish",
      notable: "Thomas Jefferson grew over thirty varieties of peas at Monticello and considered fresh peas a delicacy — a preference that influenced American cooking for over a century.",
      history: "Creamed peas and new potatoes was the quintessential American spring dish — a celebration of the first produce of the season after a long winter. It appeared in every American cookbook from the mid-1800s through the 1940s. Frozen peas and year-round potato availability eventually robbed the dish of its seasonal magic, and without that context it became just another undramatic vegetable side.",
      type: "Side",
      difficulty: 1,
      servings: 4,
      description: "Tiny new potatoes and fresh peas in a delicate cream sauce — a spring dish that appears in nearly every American cookbook of the 1920s.",
      ingredients: ["1 lb small new potatoes, halved", "2 cups fresh or frozen peas", "3 tbsp butter", "2 tbsp flour", "1½ cups milk", "Salt, white pepper", "Fresh mint (optional)"],
      instructions: ["Boil potatoes until just tender, about 12 minutes. Cook peas separately.", "Melt butter, whisk in flour, add milk. Cook until thick.", "Add drained potatoes and peas to sauce.", "Season with salt and white pepper.", "Add fresh mint if desired. Serve immediately."]
    },
    {
      name: "Perfection Salad",
      region: "Nationwide; won third prize in a Knox Gelatin recipe contest in 1905 and was distributed nationally through Knox advertising",
      notable: "Mrs. Charles Cooke of New Castle, Pennsylvania submitted the original recipe to a Knox Gelatin contest in 1904. Knox later claimed it as their own and promoted it aggressively for decades.",
      history: "Perfection Salad is arguably the most famous gelatin salad in American history. Knox Gelatin's promotional campaigns in the early 1900s encouraged American housewives to see gelatin molds as a mark of modern, scientific cooking. Millions of Knox advertising pamphlets distributed the recipe, and it appeared on American tables for sixty years before finally becoming the poster child for everything that went wrong with mid-century American food.",
      type: "Side",
      difficulty: 2,
      servings: 8,
      description: "Shredded cabbage, celery, and pimentos suspended in lemony gelatin — one of the most famous American gelatin salads, a fixture at church suppers for decades.",
      ingredients: ["1 envelope unflavored gelatin", "½ cup cold water", "½ cup boiling water", "¼ cup sugar", "¼ cup cider vinegar", "2 tbsp lemon juice", "1 tsp salt", "1 cup shredded cabbage", "½ cup celery, minced", "¼ cup pimentos"],
      instructions: ["Soften gelatin in cold water, then dissolve in boiling water.", "Stir in sugar, vinegar, lemon juice, and salt.", "Chill until syrupy, about 1 hour.", "Fold in cabbage, celery, and pimentos.", "Pour into a mold or square pan. Chill until firm.", "Slice or unmold and serve on lettuce."]
    },
    {
      name: "Frogs' Legs Provençale",
      region: "The American Midwest, particularly the Great Lakes region of Indiana, Illinois, and Wisconsin, where bullfrogs were abundant",
      notable: "Mark Twain wrote admiringly of eating frogs' legs in the 1870s, and they remained a fixture at Chicago's finest restaurants — including the Palmer House — through the 1930s.",
      history: "Frogs' legs were a mainstream American food in ways that seem remarkable today. Midwest rivers and wetlands were full of large bullfrogs, and gigging for frogs on summer evenings was a standard rural pastime. French-trained chefs popularized the Provençale preparation in American hotel and restaurant kitchens. Wetland drainage throughout the Midwest dramatically reduced frog populations in the mid-20th century, and changing tastes completed the dish's disappearance.",
      type: "Main",
      difficulty: 3,
      servings: 4,
      description: "Frogs' legs sautéed in garlic butter and parsley were far more common in American restaurants and home kitchens in the 1920s than today.",
      ingredients: ["12 pairs frogs' legs", "Flour for dredging", "4 tbsp butter", "3 cloves garlic, minced", "¼ cup fresh parsley, chopped", "Juice of 1 lemon", "Salt and pepper"],
      instructions: ["Pat frogs' legs dry. Season with salt and pepper. Dredge in flour.", "Melt butter over medium-high heat until foamy.", "Sauté legs 4-5 minutes per side until golden.", "Add garlic in the last minute of cooking.", "Remove to a plate, squeeze lemon into the pan, add parsley.", "Pour pan sauce over legs."]
    },
    {
      name: "Beaten Biscuits",
      region: "The Upper South — Virginia, Maryland, Kentucky, and Tennessee — where they were served with thinly sliced country ham",
      notable: "Beaten biscuits were the biscuit of choice at Virginia plantation houses and reportedly served at presidential inaugurations of Virginia-born presidents through the early 1900s.",
      history: "Beaten biscuits predate chemical leaveners in America — before baking powder, biscuit dough required physical beating to incorporate air and tenderize the gluten. Proper beaten biscuits required 300 to 500 strokes with a mallet. In the antebellum South, this work was performed by enslaved people; their labor made beaten biscuits a symbol of upper-class Southern hospitality. After emancipation, beaten biscuit machines were invented, but the dish gradually retreated as baking powder biscuits replaced the laborious tradition.",
      type: "Side",
      difficulty: 4,
      servings: 24,
      description: "A Southern tradition: biscuit dough beaten 300 times with a rolling pin or mallet until silky and smooth — produces a hard, crackery biscuit for country ham.",
      ingredients: ["2 cups flour", "½ tsp salt", "½ tsp sugar", "4 tbsp cold lard", "½ cup ice water (approximately)"],
      instructions: ["Mix flour, salt, and sugar. Cut in lard until crumbly.", "Add water gradually until dough comes together.", "Beat dough with a rolling pin or mallet for 20-30 minutes, folding often.", "Roll ¼ inch thick. Cut with a small cutter.", "Prick tops with a fork.", "Bake at 400°F for 20-25 minutes until pale and dry."]
    },
    {
      name: "Floating Island",
      region: "Nationwide; introduced through French restaurant cooking and adopted enthusiastically by American home bakers",
      notable: "Thomas Jefferson encountered Floating Island in France and brought the recipe back to America, serving it at Monticello. It was a staple of fine American dining for over a century.",
      history: "Floating Island — Île Flottante in French — was one of the first French desserts to be adopted wholesale by American cooking. Jefferson's enthusiasm for French food after his ambassadorship helped introduce it to American fine dining, and by the late 1800s it appeared in virtually every American cookbook. Its disappearance is genuinely puzzling, as it requires fewer ingredients than most modern desserts and tastes extraordinary.",
      type: "Dessert",
      difficulty: 3,
      servings: 4,
      description: "Poached meringue islands floating on a sea of vanilla custard — elegant, ethereal, and almost never made today despite its simple genius.",
      ingredients: ["4 eggs, separated", "1 cup sugar, divided", "2 cups whole milk", "1 tsp vanilla extract", "Pinch salt", "Caramel sauce to drizzle"],
      instructions: ["Make crème anglaise: whisk yolks with ½ cup sugar. Scald milk, temper into yolks, cook gently until coats spoon. Add vanilla. Chill.", "Beat whites with pinch of salt to stiff peaks. Beat in remaining ½ cup sugar.", "Poach large spoonfuls of meringue in barely simmering water, 2 min per side.", "Drain meringues and float atop cold custard.", "Drizzle with caramel just before serving."]
    },
    {
      name: "Sponge Cake with Boiled Icing",
      region: "Nationwide; the standard American celebration cake before the rise of butter layer cakes in the mid-20th century",
      notable: "The boiled icing sponge cake was the standard birthday and wedding cake in American homes through the 1940s. The shift to butter-cream frosted layer cakes in the 1950s effectively displaced it from celebration baking entirely.",
      history: "Boiled icing — a glossy white meringue made by pouring hot sugar syrup into beaten egg whites — was the prestige frosting of American baking from the 19th century through the 1940s. It produced a brilliantly white, billowy coating that looked magnificent. When commercial butter-cream recipes became widespread in the 1950s — simpler, more forgiving, and more stable — the boiled icing tradition collapsed within a generation.",
      type: "Dessert",
      difficulty: 4,
      servings: 10,
      description: "A featherlight sponge finished with a billowy seven-minute boiled white icing — once the standard American celebration cake, now largely replaced by buttercream.",
      ingredients: ["1 cup cake flour", "1 cup sugar, divided", "6 eggs, separated", "1 tbsp lemon juice", "1 tsp vanilla", "Pinch salt", "ICING: 2 cups sugar", "⅔ cup water", "3 egg whites", "1 tsp vanilla"],
      instructions: ["Beat yolks with ½ cup sugar until pale. Beat whites with salt to soft peaks, add remaining sugar.", "Fold yolk mixture into whites. Fold in flour, lemon, and vanilla.", "Bake in an ungreased tube pan at 325°F for 55 min. Invert to cool.", "ICING: Boil sugar and water to soft-ball stage (240°F). Beat whites to stiff peaks; pour hot syrup in steady stream while beating.", "Continue beating until thick and glossy. Frost cooled cake."]
    },
    {
      name: "Chicken Croquettes",
      region: "Nationwide; a standard item on hotel dining room menus from New York to Los Angeles",
      notable: "Chicken croquettes were the signature luncheon dish at the Plaza Hotel in New York during the 1920s, served with cream sauce and buttered peas.",
      history: "The chicken croquette was the peak of American culinary ambition in the years before Julia Child and the French cooking revolution. Making proper croquettes required real skill: a stiff béchamel base, careful shaping, an even double-breading, and precise frying technique. Hotel dining rooms employed cooks specifically for croquette work. The dish faded as American tastes moved from French-technique cooking toward simpler preparations.",
      type: "Luncheonette",
      difficulty: 3,
      servings: 6,
      description: "Minced cooked chicken bound in a thick cream sauce, shaped into cylinders, breaded, and deep-fried — the peak of 1920s restaurant and home cooking.",
      ingredients: ["2 cups cooked chicken, finely minced", "3 tbsp butter", "3 tbsp flour", "¾ cup chicken broth", "¼ cup cream", "Salt, pepper, nutmeg", "1 egg, beaten", "Breadcrumbs", "Oil for frying"],
      instructions: ["Make thick sauce: melt butter, whisk in flour, add broth and cream. Cook until very thick.", "Fold in chicken. Season with salt, pepper, nutmeg.", "Spread in a pan and refrigerate until firm, at least 1 hour.", "Shape into cylinders or cones. Dip in egg, roll in breadcrumbs.", "Fry in 375°F oil until deep golden, about 3-4 minutes.", "Drain and serve with cream sauce."]
    },
    {
      name: "Crabmeat Remick",
      region: "New York City; created at the Plaza Hotel in 1920",
      notable: "In 1940, on the fiftieth anniversary of the Plaza's opening, New York Times food reporter June Owen profiled the hotel and included the recipe. It was created by Chef Albert Leopold Lattard to honor William H. Remick, then president of the New York Stock Exchange. The recipe was later liberally adapted in The New York Times Cook Book (1961) by Craig Claiborne.",
      history: "Crabmeat Remick was created in 1920 at the Plaza Hotel in New York City, one of the grandest hotels in America. The dish — crabmeat baked in individual shells under a mayonnaise and chili sauce mixture seasoned with tarragon vinegar, dry mustard, paprika, celery salt, and red pepper sauce — was a staple of the Plaza's formal dining room for decades. It represents the peak of the Edwardian American appetizer tradition: rich, elegant, served in individual portions, and requiring genuine kitchen skill. Its decline came with the broader retreat of formal hotel dining.",
      type: "Appetizer",
      difficulty: 3,
      servings: 6,
      description: "Lump crabmeat baked in scallop shells under a tangy mayonnaise and chili sauce glaze, broiled until bubbling — the Plaza Hotel's enduring contribution to American appetizer culture.",
      ingredients: [
        "6 slices bacon",
        "1 lb lump or backfin crabmeat, bits of shell and cartilage removed",
        "1⅔ cups mayonnaise",
        "½ cup chili sauce or ketchup",
        "2 tsp tarragon vinegar",
        "1 tsp dry mustard",
        "¾ tsp paprika",
        "½ tsp celery salt",
        "¼ tsp hot red pepper sauce",
        "Pinch dried leaf tarragon, crumbled"
      ],
      instructions: [
        "Preheat oven to 375°F. Butter 6 crab or scallop shells or shallow individual ramekins and set aside.",
        "Fry bacon in medium heavy skillet over moderate heat until crisp and brown — 3 to 5 minutes. Drain on paper towels, crumble, and set aside.",
        "Divide crab evenly among shells, set on large baking sheet, and top with crumbled bacon, dividing evenly.",
        "Bake uncovered just until warmed through — about 10 minutes.",
        "Meanwhile, whisk together mayonnaise, chili sauce, vinegar, dry mustard, paprika, celery salt, red pepper sauce, and tarragon.",
        "Remove crab from oven and preheat broiler. Quickly cover crab with mayonnaise mixture.",
        "Broil 5 to 6 inches from heat just until bubbly and tipped with brown — 2 to 3 minutes.",
        "Serve immediately."
      ]
    },
    {
      name: "Waldorf Salad (Classic)",
      region: "New York City; created at the Waldorf Hotel on Fifth Avenue in 1893",
      notable: "Created by Oscar Tschirky, the legendary maître d' of the Waldorf Hotel, for a charity ball in 1893. The original recipe contained no walnuts — those were added later. Cole Porter reportedly ate it regularly.",
      history: "The Waldorf Salad is one of the most copied and corrupted recipes in American culinary history. Oscar Tschirky's original was strikingly simple: diced apple, celery, and mayonnaise, nothing else — a deliberate statement of American elegance. Over the following decades, walnuts, grapes, raisins, and countless other additions crept in, diluting the original's austere perfection. The dish's overexposure eventually made it seem passé.",
      type: "Luncheonette",
      difficulty: 2,
      servings: 4,
      description: "The original: apple, celery, and walnut in mayonnaise — no grapes, no extra additions. Simple, crisp, and exactly as Oscar Tschirky made it at the Waldorf Hotel.",
      ingredients: ["3 tart apples, cored and diced", "3 stalks celery, thinly sliced", "½ cup walnut halves", "½ cup mayonnaise", "1 tbsp lemon juice", "Salt", "Lettuce cups for serving"],
      instructions: ["Toss diced apple with lemon juice immediately to prevent browning.", "Combine apple, celery, and walnuts.", "Fold in mayonnaise. Season lightly with salt.", "Serve in crisp lettuce cups.", "Prepare no more than 1 hour before serving."]
    },
    {
      name: "Liverwurst Sandwich",
      region: "Nationwide; particularly associated with German-American communities in the Midwest and New York City delicatessens",
      notable: "Liverwurst sandwiches were a standard item on the Lunken Airport menu in Cincinnati — the Lunken Special, Pilot's Delight, and Cockpit Special all appeared on the same counter menu that featured liverwurst as a standalone 15-cent option.",
      history: "Liverwurst — from the German Leberwurst, liver sausage — arrived in America with the great German immigration of the mid-19th century. By the early 20th century it had crossed over into mainstream American deli culture and was one of the most widely eaten sandwich fillings in the country. Its decline began in the 1960s as organ meats fell from fashion in American cooking, and accelerated through the 1970s and 80s as health concerns about liver consumption grew. It survives in German-American delicatessens but has largely vanished from mainstream lunch counters.",
      type: "Luncheonette",
      difficulty: 1,
      servings: 2,
      description: "The German-American deli classic — liverwurst spread on rye with mustard, sliced onion, and a dill pickle. One of the great forgotten American sandwiches.",
      ingredients: ["4 oz liverwurst (Braunschweiger)", "2 slices rye bread", "1 tbsp spicy brown or German mustard", "2-3 thin slices raw white onion", "2-3 slices dill pickle", "Optional: 1 leaf iceberg lettuce"],
      instructions: ["Spread one slice of rye bread with mustard.", "Spread liverwurst generously on the other slice.", "Layer with thin raw onion slices and pickle.", "Press together.", "Slice diagonally.", "Serve with a full dill pickle spear on the side.", "This sandwich requires rye bread — white bread is wrong."]
    },
    {
      name: "Egg Salad Sandwich",
      region: "Nationwide; one of the universal American lunch counter sandwiches from the 1920s through the present",
      notable: "The egg salad sandwich is among the most classically American sandwiches — it appears on the menu from the Lunken Airport counter (10 cents) to the White House staff cafeteria. Simple, cheap, and endlessly satisfying.",
      history: "Egg salad as a sandwich filling emerged in the early 20th century as mayonnaise became commercially available and affordable. The Duke's, Hellmann's, and Kraft mayonnaise companies all promoted egg salad in their advertising from the 1920s onward. The combination of hard-boiled eggs, mayonnaise, and mustard became a standard lunch counter offering across America. At the Lunken Airport counter in Cincinnati, it was listed at 10 cents — one of the cheapest items on the menu. It has never fully gone away but has been largely displaced by more substantial sandwiches in lunch culture.",
      type: "Luncheonette",
      difficulty: 1,
      servings: 4,
      description: "The lunch counter egg salad sandwich as it was made at every American diner and café from the 1920s onward — simple, creamy, and best on white bread with iceberg lettuce.",
      ingredients: ["6 hard-boiled eggs, peeled", "3 tbsp mayonnaise", "1 tsp yellow mustard", "1 stalk celery, finely diced", "Salt and white pepper", "Paprika for garnish", "White sandwich bread", "Iceberg lettuce"],
      instructions: ["Chop hard-boiled eggs — some people prefer to mash, but chopped gives better texture.", "Mix with mayonnaise, mustard, and celery.", "Season generously with salt and white pepper.", "Refrigerate 30 minutes.", "Pile on white bread with iceberg lettuce.", "Sprinkle with paprika.", "Trim crusts for a proper lunch counter presentation.", "Serve immediately — egg salad waits for no one."]
    },
    {
      name: "Tomato Stuffed with Chicken Salad",
      region: "Nationwide; a standard cold plate offering at lunch counters, hotel dining rooms, and tea rooms from the 1920s through the 1960s",
      notable: "The tomato stuffed with chicken salad appears on the Lunken Airport cold plate menu alongside celery hearts and a sliced egg — a presentation style that was universal at American lunch counters. The entire plate cost 35 cents.",
      history: "The stuffed tomato as a presentation vessel for cold salads was enormously fashionable in American restaurant culture from the 1910s through the 1950s. It appeared in virtually every home economics cookbook, every hotel menu, and every luncheon guide of the era. The combination of a hollowed-out tomato filled with chicken salad, served on a cold plate with celery hearts and a sliced egg, was considered the ideal ladies' luncheon. Its decline was swift — by the 1970s it had essentially vanished from American menus, a casualty of the sandwich and the fast food revolution.",
      type: "Luncheonette",
      difficulty: 2,
      servings: 4,
      description: "The vanished American cold plate — a beefsteak tomato hollowed out and filled with creamy chicken salad, served on a bed of iceberg lettuce with celery hearts alongside.",
      ingredients: ["4 large ripe beefsteak tomatoes", "2 cups cooked chicken, finely diced", "½ cup mayonnaise", "2 stalks celery, finely diced", "1 tbsp fresh lemon juice", "Salt and white pepper", "Iceberg lettuce for serving", "Celery hearts and sliced hard-boiled egg to garnish"],
      instructions: ["Slice the top off each tomato. Hollow out carefully with a spoon, reserving the inside.", "Salt the inside of each tomato and turn upside down on a plate to drain for 15 minutes.", "Mix chicken with mayonnaise, celery, and lemon juice. Season with salt and white pepper.", "Fill each tomato generously with chicken salad.", "Arrange on a bed of iceberg lettuce.", "Place celery hearts alongside.", "Garnish with sliced hard-boiled egg.", "This is how it looked on every cold plate in America from 1930 to 1965."]
    },
    {
      name: "Kentucky Hot Brown",
      region: "Louisville, Kentucky; created at the Brown Hotel on Broadway by Chef Fred K. Schmidt in 1926",
      notable: "The Brown Hotel drew over 1,200 guests every night in the 1920s for its dinner dance. When the band took a break around midnight and the dancers got hungry, Chef Schmidt needed something more impressive than ham and eggs. The Hot Brown was his answer — and it has been the signature dish of Louisville ever since.",
      history: "Chef Fred K. Schmidt created the Hot Brown in 1926 at the Brown Hotel in Louisville, Kentucky, to feed late-night dancers who wanted something more glamorous than the standard ham and eggs supper. The open-faced sandwich — turkey on thick toast, blanketed in a rich Mornay sauce, finished under the broiler with bacon and tomato — was an immediate sensation. When the Brown Hotel closed in 1972, the recipe scattered across Louisville restaurants and was nearly lost before the hotel reopened in 1984 and Chef Joe Castro reconstructed the original. It has since become the official signature dish of Louisville and a Kentucky Derby tradition.",
      type: "Luncheonette",
      difficulty: 3,
      servings: 2,
      description: "Louisville's famous open-faced sandwich — roasted turkey on thick toast, smothered in rich Mornay sauce and broiled until bubbling, finished with crispy bacon and tomato. Invented at the Brown Hotel in 1926 for midnight-hungry dancers.",
      ingredients: ["4 oz sliced roasted turkey breast", "2 slices thick white bread or Texas toast, toasted and crusts trimmed", "2 strips crispy bacon", "2 roma tomato halves", "MORNAY SAUCE: 2 tbsp butter", "2 tbsp flour", "1 cup whole milk", "¼ cup heavy cream", "¼ cup Pecorino Romano, grated", "Salt and white pepper", "Pinch nutmeg", "Paprika and fresh parsley to garnish"],
      instructions: ["Make Mornay sauce: melt butter, whisk in flour, cook 1 minute.", "Add milk and cream gradually, whisking until smooth and thick.", "Remove from heat. Stir in half the cheese. Season with salt, pepper, and nutmeg.", "Place toast in a heatproof dish. Layer turkey generously over toast.", "Pour Mornay sauce over everything to cover completely.", "Add tomato halves alongside.", "Sprinkle with remaining cheese.", "Broil 4-5 minutes until sauce is bubbling and lightly browned.", "Cross two strips of bacon over the top.", "Dust with paprika and parsley.", "Serve immediately in the dish — this is not a portable sandwich."]
    },
    {
      name: "Chopped Chicken Liver",
      region: "New York City and the urban Northeast; a cornerstone of Jewish delicatessen culture from the 1880s through the 1960s, served at lunch counters and delis throughout the garment district and Lower East Side",
      notable: "Chopped chicken liver was so fundamental to New York deli culture that it appeared on virtually every Jewish deli menu in the country. The Catskills resort hotels — known as the Borscht Belt — served it as a standard appetizer at every meal through the 1950s and 60s.",
      history: "Chopped chicken liver arrived in America with the great wave of Eastern European Jewish immigration between 1880 and 1920. In the Jewish dietary tradition, chicken schmaltz — rendered chicken fat — was used for cooking in the same way butter was used in non-kosher kitchens, and chicken livers were a byproduct of the chicken processing that went into every Jewish kitchen. Chopped with hard-boiled eggs, onion, and schmaltz, it became the signature appetizer of the American Jewish deli. Its decline tracks exactly with the decline of the traditional delicatessen — from thousands of Jewish delis in New York in 1950 to fewer than a dozen authentic examples today.",
      type: "Appetizer",
      servings: 8,
      description: "The great Jewish deli appetizer — chicken livers chopped with hard-boiled eggs, onion, and schmaltz until rich and spreadable. Served on rye crackers or dark bread, it was on every deli counter in America for seventy years.",
      ingredients: ["1 lb chicken livers", "3 tbsp chicken schmaltz or butter", "2 medium onions, finely diced", "3 hard-boiled eggs", "Salt and black pepper", "Rye crackers or dark rye bread to serve", "Optional: additional schmaltz for richness"],
      instructions: ["Heat 2 tbsp schmaltz in a skillet over medium heat.", "Cook onions slowly until deeply golden and caramelized — 25-30 minutes. Do not rush this.", "Add chicken livers to the pan. Cook 4-5 minutes per side until just cooked through — no pink, but not gray throughout.", "Remove from heat. Cool slightly.", "Roughly chop livers, onions, and hard-boiled eggs together on a cutting board.", "For a finer texture: pulse briefly in a food processor — but stop before it becomes a paste.", "Season generously with salt and pepper.", "Stir in remaining schmaltz for richness.", "Refrigerate at least 1 hour before serving.", "Serve on rye crackers or dark bread.", "This is better the next day."]
    },
  ],

  "1930s": [
    {
      name: "Devildine Sandwich",
      region: "Nationwide; documented in American luncheonette cookbooks of the 1920s and 1930s as a Depression-era budget sandwich that stretched expensive protein with canned goods",
      notable: "The Devildine Sandwich appeared in a 1929 cookbook as a way to make sardines — already one of the cheapest proteins available — go further by combining them with deviled ham and hard-boiled egg. The name appears to be a portmanteau of 'deviled' and 'sardine.'",
      history: "The Devildine Sandwich is one of the more unusual Depression-era lunch counter creations — sardines thinned with lemon juice, combined with canned deviled ham, a chopped hard-boiled egg, a chopped olive, and mayonnaise, spread on buttered white bread with a lettuce leaf. It sounds like a refrigerator-clearing exercise, but the combination of briny sardine, spiced ham, rich egg, and salty olive actually produces something surprisingly complex. It appeared in printed form as early as 1929 and was still being made at budget lunch counters through the 1940s. The rise of tuna fish as the dominant canned seafood in the 1950s made it obsolete.",
      type: "Luncheonette",
      difficulty: 2,
      servings: 2,
      servings: 8,
      description: "The forgotten Depression-era compound sandwich — sardines, deviled ham, hard-boiled egg, and chopped olive combined into a spread and served on white bread with lettuce. Stranger than it sounds, better than it should be.",
      ingredients: ["1 can sardines in oil, drained", "1 small can deviled ham (2.5 oz)", "1 hard-boiled egg, finely chopped", "1 tbsp fresh lemon juice", "1 green olive, finely chopped", "1 tbsp mayonnaise", "White sandwich bread, buttered", "1 leaf iceberg lettuce"],
      instructions: ["Drain sardines thoroughly and remove any bones.", "Mash sardines with a fork until smooth.", "Add lemon juice and mix until thinned to a spreadable consistency.", "Fold in deviled ham, chopped egg, olive, and mayonnaise.", "Mix until well combined.", "Taste and adjust seasoning — it may need more lemon.", "Butter two slices of white bread.", "Lay a lettuce leaf on one slice.", "Spread the devildine generously over the lettuce.", "Top with second slice.", "Cut diagonally.", "This tastes more interesting than it looks."]
    },
    {
      name: "Depression Soup (Mulligan Stew)",
      region: "Nationwide, but particularly associated with hobo camps along railroad lines throughout the Midwest and West",
      notable: "Woody Guthrie wrote about eating Mulligan Stew in hobo camps during his Depression-era travels, and the dish became embedded in American folk culture as a symbol of communal survival.",
      history: "Mulligan Stew takes its name from a common Irish surname — a reflection of the disproportionate number of Irish-American hobos and itinerant workers who popularized it. The dish had no fixed recipe, only a method: pool whatever food was available, add water, and simmer. In hobo camps along the railroads, it was a cooperative meal — each person contributed what they had scavenged or stolen. Soup kitchens during the Depression served industrialized versions of the same concept, stretching meat scraps and root vegetables as far as they would go.",
      type: "Soup",
      difficulty: 1,
      servings: 6,
      description: "The hobo meal — whatever scraps and root vegetables were available, simmered together in an old pot. No fixed recipe; this is a documented version from a 1930s soup kitchen.",
      ingredients: ["1 lb cheap beef stew meat or soup bones", "4 potatoes, cubed", "3 carrots, sliced", "1 turnip, cubed", "1 large onion, chopped", "1 can tomatoes", "Salt, pepper", "Water to cover"],
      instructions: ["Brown meat in a heavy pot if fat is available; otherwise just add it raw.", "Add all vegetables, tomatoes, and enough water to cover.", "Simmer 2-3 hours over low heat until everything is tender.", "Season with salt and pepper.", "Serve with crackers or hard bread."]
    },
    {
      name: "Codfish Cakes",
      region: "New England, particularly Boston and coastal Massachusetts; the Saturday cod cake was a Boston institution",
      notable: "James Beard wrote nostalgically about eating codfish cakes every Saturday morning as a child in Portland, Oregon.",
      history: "Salt cod — dried and preserved without refrigeration — fed the Atlantic world for centuries. In New England, Saturday codfish cakes were part of the same ritual cycle as Saturday baked beans: the cakes serving as the Saturday morning meal before the beans came out for supper. During the Depression era, salt cod was one of the cheapest proteins available, and codfish cakes stretched it even further with mashed potato. The end of the salt cod trade as a major industry gradually erased the dish from American kitchens.",
      type: "Main",
      difficulty: 2,
      servings: 4,
      description: "Salt cod reconstituted and mixed with mashed potato, formed into patties and pan-fried — a thrifty Depression-era meal that once appeared weekly in most households.",
      ingredients: ["1 lb salt cod", "2 cups mashed potatoes", "1 egg, beaten", "1 onion, grated", "Black pepper", "Butter or lard for frying"],
      instructions: ["Soak salt cod in cold water for 24 hours, changing water several times.", "Boil until tender, about 15 minutes. Drain and flake finely.", "Mix with mashed potatoes, egg, and onion. Season with pepper.", "Form into patties about ¾ inch thick.", "Fry in butter or lard over medium heat, 4 minutes per side until golden."]
    },
    {
      name: "Bread Pudding with Whiskey Sauce",
      region: "The American South, particularly New Orleans, where it remains a restaurant staple to this day",
      notable: "Bread pudding with whiskey sauce is the signature dessert of Commander's Palace in New Orleans, where it has been on the menu since the restaurant's founding and was championed by chef Paul Prudhomme.",
      history: "Bread pudding is one of the oldest thrift dishes in Western cooking — a way to rescue stale bread from waste by soaking it in a milk-and-egg custard. The American South adopted the whiskey sauce as the transforming element: a rich, boozy butter sauce that turned a humble leftover dish into something genuinely luxurious. In New Orleans, where French Creole cooking valued this kind of resourceful elegance, bread pudding became a restaurant staple that survives there long after it has disappeared from homes elsewhere.",
      type: "Dessert",
      difficulty: 2,
      servings: 8,
      description: "Day-old bread soaked in a custard and baked — a thrifty dessert elevated by a warm bourbon sauce that became a Southern classic.",
      ingredients: ["6 cups day-old white bread, cubed", "3 cups milk", "3 eggs", "1 cup sugar", "1 tsp vanilla", "1 tsp cinnamon", "½ cup raisins", "3 tbsp butter, melted", "SAUCE: 1 cup powdered sugar", "1 egg", "½ cup butter", "3 tbsp bourbon"],
      instructions: ["Soak bread in milk 10 minutes. Beat in eggs, sugar, vanilla, cinnamon, raisins, and butter.", "Pour into a buttered 9x13 pan.", "Bake at 325°F for 45-55 minutes until set and golden.", "SAUCE: Melt butter; beat in powdered sugar and egg over gentle heat. Add bourbon. Pour warm over individual servings."]
    },
    {
      name: "Creamed Chipped Beef",
      region: "Nationwide; served in diners, Army mess halls, and homes from coast to coast",
      notable: "General Dwight Eisenhower reportedly complained about the quality of Army chipped beef during World War II, though it remained a standard military breakfast through the Korean War.",
      history: "Creamed chipped beef traces to the New England practice of drying and salting thin slices of beef for preservation. It became a Depression staple because dried beef was inexpensive, a little went a long way in a cream sauce, and it required no refrigeration. The Army adopted it for logistical reasons, and served it in such quantities and of such variable quality that it acquired its famous unprintable nickname. Postwar, its association with institutional food gave it a stigma from which it never recovered.",
      type: "Luncheonette",
      difficulty: 2,
      servings: 4,
      description: "Thin, dry-cured beef shredded into a thick milk gravy — nicknamed 'SOS' by soldiers, this was a Depression and wartime staple served over toast.",
      ingredients: ["4 oz chipped (dried) beef", "3 tbsp butter", "3 tbsp flour", "2 cups whole milk", "Black pepper", "White toast for serving"],
      instructions: ["Rinse chipped beef in warm water. Tear into small pieces.", "Melt butter in skillet. Whisk in flour; cook 1 min.", "Add milk gradually, whisking until smooth and thick.", "Fold in beef. Season generously with black pepper.", "Serve over hot toast. Salt cautiously — beef is already salty."]
    },
    {
      name: "Bean and Bacon Soup",
      region: "Nationwide; one of the most universal American dishes, eaten from New England to the South to the Midwest",
      notable: "Bean and bacon soup has been served continuously in the U.S. Senate restaurant since 1903, the result of a standing order from Senator Fred Dubois of Idaho who insisted it appear on the menu every single day.",
      history: "Bean soup with pork is as old as European settlement in America. Dried beans were one of the most reliable food crops, and salt pork or bacon provided fat and protein without refrigeration. During the Depression, a ham hock and a pound of dried beans could feed a family of six for days. Its slow simmering on the back of the stove was itself a Depression-era virtue — it required attention but no skill, and improved the longer it cooked.",
      type: "Soup",
      difficulty: 1,
      servings: 8,
      description: "Navy beans simmered with a ham hock or bacon ends until creamy — a Depression-era pot that simmered on the back of the stove all day.",
      ingredients: ["1 lb navy beans, soaked overnight", "1 meaty ham hock or ½ lb bacon ends", "1 large onion, chopped", "3 stalks celery, chopped", "2 cloves garlic", "Salt, black pepper", "Bay leaf"],
      instructions: ["Drain soaked beans. Place in a large pot with ham hock.", "Add onion, celery, garlic, and bay leaf. Cover with water by 2 inches.", "Simmer 2-3 hours until beans are completely soft.", "Remove ham hock; shred meat and return to pot.", "Mash some beans for thickness. Season with salt and pepper."]
    },
    {
      name: "Mock Apple Pie (Ritz Cracker Pie)",
      region: "Nationwide; developed and distributed by Nabisco as a marketing device for Ritz Crackers, introduced in 1934",
      notable: "Nabisco first printed the Mock Apple Pie recipe on Ritz Cracker boxes in 1934 and continued doing so for decades. It appeared on the box as recently as the 1990s.",
      history: "Mock Apple Pie was a Depression-era act of culinary alchemy: using cream of tartar, sugar, lemon, and Ritz Crackers to simulate apple pie filling without a single apple. The chemistry works because cream of tartar produces an acidic tartness similar to apple, the crackers soften to an apple-like texture in the sweetened liquid, and cinnamon and lemon complete the illusion. Nabisco promoted it aggressively, but it spread because apples were expensive and crackers were not. Generations of people who grew up eating it reportedly preferred it to real apple pie.",
      type: "Dessert",
      difficulty: 2,
      servings: 8,
      description: "A pie made entirely without apples — crackers, sugar, and cream of tartar create a filling that tastes remarkably like apple. Printed on Ritz boxes during the Depression.",
      ingredients: ["Pastry for a double-crust 9-inch pie", "36 Ritz crackers, coarsely broken", "1¾ cups water", "2 cups sugar", "2 tsp cream of tartar", "2 tbsp lemon juice", "Grated zest of 1 lemon", "2 tbsp butter", "½ tsp cinnamon"],
      instructions: ["Roll out pastry and line pie plate. Fill with cracker pieces.", "Boil water, sugar, and cream of tartar for 15 minutes. Add lemon juice and zest.", "Pour syrup over crackers. Dot with butter, sprinkle with cinnamon.", "Cover with top crust, seal, and vent.", "Bake at 425°F for 30-35 minutes until golden."]
    },
    {
      name: "Stuffed Pepper with Rice and Meat",
      region: "Nationwide; especially popular in Italian-American and Eastern European immigrant households",
      notable: "Stuffed peppers appear in settlement house cookbooks of the 1910s and 20s as a recommended dish for immigrant families — an efficient way to feed many from little.",
      history: "Stuffed pepper recipes appear in American cookbooks from the 1880s onward, influenced by Turkish and Eastern Mediterranean traditions where stuffed vegetables were standard fare. During the Depression the dish flourished as a budget stretcher: a single pound of ground beef, extended with rice and tomatoes, could fill six substantial pepper shells. The visual appeal made it seem more festive than the budget it required. Its slow postwar decline is puzzling — the dish is filling, inexpensive, and genuinely delicious.",
      type: "Main",
      difficulty: 2,
      servings: 6,
      description: "Green peppers hollowed out and filled with a mixture of ground beef, rice, and tomato sauce — a Depression-era budget stretcher that could feed a family of six on very little.",
      ingredients: ["6 large green bell peppers", "1 lb ground beef", "1 cup cooked rice", "1 small onion, minced", "1 can (15 oz) tomato sauce", "Salt and pepper", "1 tsp Worcestershire sauce"],
      instructions: ["Cut tops off peppers; remove seeds and membranes. Parboil 5 minutes.", "Brown beef with onion. Drain fat.", "Mix with rice, half the tomato sauce, Worcestershire, salt, and pepper.", "Fill peppers with mixture. Stand upright in a baking dish.", "Pour remaining tomato sauce around peppers.", "Bake at 350°F for 45 minutes."]
    },
    {
      name: "Pigs in Blankets (1930s Version)",
      region: "East Coast cocktail party culture; particularly fashionable in New York and Philadelphia",
      notable: "The oyster-wrapped-in-bacon version appears in 1930s cocktail party guides as one of the quintessential sophisticated nibbles of the era.",
      history: "The term pigs in blankets has referred to at least three completely different dishes at different points in American culinary history. In the early 1900s it meant cabbage rolls stuffed with pork. By the 1930s it specifically meant oysters wrapped in bacon — the oyster being the pig and the bacon the blanket. The current meaning — cocktail frankfurters in crescent roll dough — appeared in the 1950s and gradually displaced all earlier uses of the name. The oyster version is genuinely excellent and deserves revival.",
      type: "Appetizer",
      difficulty: 2,
      servings: 6,
      description: "In the 1930s this meant oysters wrapped in bacon and broiled — not the modern cocktail franks. A fashionable cocktail party nibble.",
      ingredients: ["18 fresh oysters, shucked", "9 strips thin-cut bacon, halved", "Salt, pepper, cayenne", "Toothpicks", "Lemon wedges"],
      instructions: ["Season oysters with salt, pepper, and a pinch of cayenne.", "Wrap each oyster in a half-strip of bacon.", "Secure with a toothpick.", "Broil on a rack 3-4 minutes until bacon is crispy and oysters are just curled.", "Serve immediately with lemon wedges."]
    },
    {
      name: "Scalloped Potatoes with Ham",
      region: "Nationwide; one of the most universal American casserole dishes, with no specific regional home",
      notable: "Scalloped potatoes with ham is one of the dishes most consistently cited in oral histories of Depression-era cooking as the meal families returned to again and again when money was short.",
      history: "Scalloped potatoes in various forms have been in American cookbooks since the 1820s, but the ham version became particularly important during the Depression when a small amount of leftover ham could be distributed across an entire casserole to feed a family. Potatoes were cheap and storable, ham scraps were available, and cream sauce could be made from milk when cream was scarce. The dish survives today but has retreated into holiday and church supper territory.",
      type: "Side",
      difficulty: 1,
      servings: 6,
      description: "Thinly sliced potatoes layered with ham and onion in a cream sauce — the ultimate Depression casserole, stretching a small amount of ham into a full meal.",
      ingredients: ["2 lbs potatoes, thinly sliced", "1 cup cooked ham, diced", "1 onion, thinly sliced", "3 tbsp butter", "3 tbsp flour", "2 cups milk", "Salt, pepper"],
      instructions: ["Preheat oven to 350°F. Butter a 2-quart baking dish.", "Make cream sauce: melt butter, whisk in flour, add milk, stir until thick.", "Layer potatoes, ham, and onion in dish, seasoning each layer.", "Pour cream sauce over top.", "Cover and bake 45 minutes. Uncover and bake 20 more minutes until top is golden."]
    },
    {
      name: "Oxtail Stew",
      region: "Nationwide, with particular strength in African American Southern cooking and British immigrant communities",
      notable: "Cookbook author Edna Lewis described oxtail stew as a centerpiece dish at Virginia community gatherings throughout the Depression era. The cut has recently seen a dramatic restaurant revival.",
      history: "Oxtail has one of the strangest trajectories in American food history: cheap Depression food, then forgotten, then rediscovered and made expensive by restaurant chefs. During the Depression, oxtail was among the cheapest items at the butcher. But oxtail is rich in collagen, producing a deeply flavored, silky broth after hours of braising. African American cooking traditions preserved the dish through the lean years when mainstream cooking abandoned it. It has since become a fashionable and expensive restaurant item.",
      type: "Soup/Stew",
      difficulty: 3,
      servings: 4,
      description: "Oxtail was the cheapest cut available during the Depression — simmered for hours into a rich, gelatinous broth that was far more nourishing than its humble origins suggested.",
      ingredients: ["3 lbs oxtail, cut in sections", "2 onions, chopped", "3 carrots, chopped", "3 stalks celery", "1 can tomatoes", "2 cloves garlic", "Thyme, bay leaves", "Salt and pepper", "Flour for dredging"],
      instructions: ["Dredge oxtail in flour; brown well in fat in a heavy pot.", "Remove oxtail; sauté onions, carrots, and celery.", "Return oxtail; add tomatoes, garlic, herbs, and enough water to cover.", "Simmer very gently for 3-4 hours until meat falls from bones.", "Season, skim fat. Serve with mashed potatoes."]
    },
    {
      name: "Corn Pone",
      region: "The American South, particularly among sharecropper and rural poor communities in the Deep South",
      notable: "Mark Twain wrote a famous essay called Corn-Pone Opinions in which he used corn pone as a symbol of authentic American thinking formed from direct experience rather than fashion.",
      history: "Corn pone is the oldest and most austere form of American cornbread — no eggs, no milk, no baking powder. Ground cornmeal, salt, fat, and enough boiling water to hold it together, shaped by hand. It was the food of people who had nothing extra: enslaved people in the antebellum South, sharecroppers and tenant farmers through the Depression, subsistence farmers throughout Appalachia. The difference between corn pone and cornbread is economic as much as culinary — pone was what you made when you had only corn; cornbread was what you made when you had eggs and buttermilk too.",
      type: "Side",
      difficulty: 2,
      servings: 8,
      description: "Simple cornmeal dough shaped by hand and baked or fried without buttermilk or eggs — true corn pone is purely cornmeal, salt, fat, and water, as eaten by sharecroppers.",
      ingredients: ["2 cups white cornmeal", "1 tsp salt", "1 tbsp lard or bacon drippings", "¾ cup boiling water (approximately)"],
      instructions: ["Mix cornmeal and salt. Rub in lard until crumbly.", "Add boiling water gradually, just enough to make a stiff dough.", "Shape into oval patties by hand.", "Place on a greased baking sheet or in a hot cast iron skillet.", "Bake at 450°F for 20-25 minutes until edges are crisp, or pan-fry in hot fat."]
    },
    {
      name: "Liver and Onions",
      region: "Nationwide; liver and onions crossed all regional and class lines and was eaten from working-class tenements to middle-class family tables",
      notable: "The USDA and wartime nutrition advocates actively championed liver during the Depression as a superfood — inexpensive, dense in iron and vitamins, and universally available.",
      history: "During the Depression and through World War II, liver was actively promoted by nutritionists as a superfood: inexpensive, dense in iron and vitamins, and universally available. The dish required some skill to make well — liver toughens instantly if overcooked. After the war, as beef became affordable and American tastes shifted toward the unchallenging, liver's assertive flavor became a liability rather than an asset. By the 1980s it had retreated almost entirely to diners and the homes of people who grew up eating it.",
      type: "Main",
      difficulty: 2,
      servings: 4,
      description: "Beef liver sliced thin, dredged in flour, and pan-fried with caramelized onions — affordable, iron-rich, and a near-nightly Depression-era staple that has since fallen out of fashion.",
      ingredients: ["1½ lbs beef liver, thinly sliced", "2 large onions, thinly sliced", "Flour for dredging", "4 tbsp butter, divided", "Salt and pepper"],
      instructions: ["Soak liver in milk 30 minutes; drain and pat dry.", "Cook onions in 2 tbsp butter over low heat until very soft and golden, about 25 min.", "Remove onions. Dredge liver in seasoned flour.", "Cook liver in remaining butter over medium-high heat, 2-3 min per side.", "Return onions to pan. Serve immediately — liver toughens quickly."]
    },
    {
      name: "Creamed Spinach (Old-Fashioned)",
      region: "Nationwide; a standard American side dish particularly common in New England and Mid-Atlantic households",
      notable: "The current steakhouse version of creamed spinach — puréed smooth in heavy cream — is a mid-century restaurant adaptation. The original home version used roughly chopped spinach in a simple white sauce, which is considerably lighter and more interesting.",
      history: "Creamed spinach in American home cooking bore little resemblance to the dense, puréed steakhouse preparation that now owns the name. The original version was simply wilted, chopped spinach folded into a light white sauce, often topped with a sliced hard-boiled egg. The dish was transformed by the steakhouse industry into something much heavier, and the original lighter version — along with its distinctive hard-boiled egg garnish — was forgotten entirely.",
      type: "Side",
      difficulty: 1,
      servings: 4,
      description: "Whole-leaf spinach chopped and folded into a thick white sauce with hard-boiled egg on top — this is not the puréed steakhouse version, but the home original.",
      ingredients: ["2 lbs fresh spinach", "3 tbsp butter", "2 tbsp flour", "1 cup milk", "¼ cup cream", "1 hard-boiled egg, sliced", "Nutmeg, salt, pepper"],
      instructions: ["Wilt spinach in boiling salted water, 2 minutes. Drain, squeeze dry, chop roughly.", "Make white sauce: melt butter, whisk in flour, add milk and cream. Cook until thick.", "Fold in chopped spinach. Season with nutmeg, salt, and pepper.", "Transfer to a warm dish.", "Top with sliced hard-boiled egg. Serve immediately."]
    },
    {
      name: "Tomato Bisque",
      region: "Nationwide; one of the most universally made American soups before canned soup made the scratch version obsolete",
      notable: "Campbell's condensed tomato soup, introduced in 1897, was directly modeled on homemade tomato bisque and eventually displaced it entirely in most American homes.",
      history: "Homemade tomato bisque was a Sunday staple in American households from the mid-1800s through the 1930s. The recipe was simple: cook tomatoes with onion, push through a sieve, thicken with a flour roux, enrich with cream, and sweeten slightly. The result was silky, deeply flavored, and nothing like the commercial product that eventually replaced it. By the 1950s, tomato soup in most homes meant a can of Campbell's diluted with water or milk, and the scratch bisque was simply forgotten.",
      type: "Soup",
      difficulty: 2,
      servings: 4,
      description: "A smooth, creamy tomato soup made from scratch — thicker and richer than canned soup, sweetened with a pinch of sugar, this was Sunday lunch in millions of homes.",
      ingredients: ["2 lbs ripe tomatoes (or 1 large can)", "1 onion, chopped", "2 tbsp butter", "2 tbsp flour", "1 cup chicken broth", "1 cup heavy cream", "1 tsp sugar", "Salt, pepper, fresh basil"],
      instructions: ["Cook tomatoes and onion in butter 15 min until soft.", "Push through a sieve or blend smooth.", "Return to pot. Whisk in flour dissolved in broth.", "Bring to a simmer, stirring. Add cream and sugar.", "Simmer 10 minutes. Season with salt, pepper, and basil."]
    },
    {
      name: "Ginger Snaps (Old-Fashioned Hard)",
      region: "Nationwide; a staple of Pennsylvania Dutch, New England, and Scandinavian-American baking traditions",
      notable: "Hard gingersnaps were the standard American cookie through the 19th and early 20th centuries — the soft gingersnap now standard in American supermarkets is a mid-century invention that appropriated the name.",
      history: "The original American gingersnap was bone-hard, intensely spiced, deeply dark from molasses, and genuinely snapped when broken — they were meant for dunking in coffee or cider, and kept for weeks without going stale. Pennsylvania Dutch bakers were particularly associated with them. The shift to soft cookies as the American preference — driven by commercial bakers who found soft cookies sold better — gradually redefined the word, and the hard original retreated to a niche. Many people today have never tasted an actual gingersnap.",
      type: "Dessert",
      difficulty: 2,
      servings: 36,
      description: "True gingersnaps were hard and genuinely snappy — these were not soft cookies. Molasses-dark, intensely spiced, and meant to be dunked.",
      ingredients: ["2 cups flour", "1 tsp baking soda", "2 tsp ginger", "1 tsp cinnamon", "½ tsp cloves", "½ cup lard or shortening", "1 cup sugar", "¼ cup molasses", "1 egg"],
      instructions: ["Cream lard and sugar. Beat in molasses and egg.", "Sift together flour, soda, and spices. Stir into wet mixture.", "Refrigerate dough 1 hour.", "Roll very thin (⅛ inch). Cut into rounds.", "Bake at 375°F for 10-12 minutes until dark and crisp.", "They harden as they cool — don't overbake."]
    },
    {
      name: "BLT Sandwich",
      region: "Nationwide; the BLT became the definitive American lunch counter sandwich during the 1930s and 40s",
      notable: "The BLT is consistently ranked as the second most popular sandwich in America after the club sandwich. Its appearance on American menus is first documented in the 1930s, though the combination of bacon, lettuce, and tomato is older.",
      history: "The BLT as a named sandwich emerged in American lunch counter culture in the 1930s, though the combination of bacon with lettuce and tomato had appeared on club sandwiches and in home cooking for decades before that. The acronym BLT was in common use by the 1940s. The sandwich's success depended on three things: sliced white bread (Wonder Bread, introduced in 1921), commercially sliced bacon (widespread by the 1930s), and the year-round availability of hothouse tomatoes. The BLT represents the moment American deli food became standardized, reproducible, and available from coast to coast.",
      type: "Luncheonette",
      servings: 1,
      difficulty: 1,
      servings: 1,
      description: "The American lunch counter classic — crisp bacon, iceberg lettuce, ripe tomato, and mayonnaise on toasted white bread. Simple, perfect, and impossible to improve.",
      ingredients: ["6 strips thick-cut bacon", "2 slices white sandwich bread, toasted", "2 tbsp mayonnaise", "2-3 leaves iceberg lettuce", "3-4 slices ripe tomato", "Salt and black pepper"],
      instructions: ["Cook bacon in a skillet over medium heat until crisp but not brittle.", "Drain on paper towels.", "Toast bread to golden brown.", "Spread both slices generously with mayonnaise.", "Layer tomato on one slice. Season with salt and black pepper.", "Add crisp bacon.", "Top with iceberg lettuce — it should hang over the edges slightly.", "Close and cut diagonally.", "Serve immediately — a BLT waits for no one."]
    },
    {
      name: "Malted Milk",
      region: "Nationwide; malt shops and soda fountains were central to American social life from the 1920s through the 1950s",
      notable: "The Lunken Airport menu listed 'Double Rich Chocolate Malted Milk' at 20 cents — twice the price of a plain malt — suggesting it was a premium item worth the extra dime. Every American airport, diner, and drugstore soda fountain served them.",
      history: "Malted milk powder was invented by William Horlick in Racine, Wisconsin in 1887 as a health food for infants and invalids. James and Alice Bradley began selling it as a soda fountain drink in Chicago in the 1920s, and it spread nationwide. The malt shop became the central social institution of American adolescent life from the 1930s through the early 1960s — where teenagers met, dated, and spent their dimes. The rise of fast food chains in the late 1960s killed the independent soda fountain, and the malted milk became a nostalgic relic rather than a daily ritual.",
      type: "Luncheonette",
      servings: 1,
      difficulty: 1,
      servings: 1,
      description: "The American malt shop classic — ice cream, whole milk, and malted milk powder blended thick and served in the metal cup it was mixed in. The 1940s version was better than anything you can get today.",
      ingredients: ["2 scoops vanilla or chocolate ice cream", "¾ cup whole milk (cold)", "3 tbsp malted milk powder (Carnation or Ovaltine)", "Optional: 2 tbsp chocolate syrup for a chocolate malt"],
      instructions: ["Chill a metal mixing cup in the freezer for 10 minutes.", "Add ice cream, cold milk, and malted milk powder.", "Optional: add chocolate syrup.", "Mix with a milkshake machine or hand blender until smooth but still thick.", "Pour into a tall glass, leaving some in the metal mixing cup.", "Traditionally served with both the glass and the remaining malt in the mixing cup.", "Serve with a wide straw.", "The malt should be thick enough that the straw stands upright."]
    },
    {
      name: "Sardine Sandwich",
      region: "Nationwide; sardines were one of the cheapest proteins available during the Depression, appearing in 1930s cookbooks and newspaper columns offering budget meal solutions",
      notable: "Sardine sandwiches were a Depression-era staple eaten by people who could not afford tuna or meat. By the 1950s, as commercial tuna fleets expanded and tuna became cheaper than sardines, the sardine sandwich was largely displaced. It survives today mainly among people who appreciate sardines as a sustainable seafood choice.",
      history: "Canned sardines were introduced to the American market in the late 19th century and became enormously popular as an inexpensive, protein-dense pantry staple. During the Depression, when meat was unaffordable for millions of families, sardines provided cheap protein with no refrigeration required. The combination of sardines, raw onion, and mustard on bread appeared in dozens of 1930s budget cookbooks and newspaper columns. Their decline began in the 1950s when tuna — less pungent, more versatile, and briefly cheaper — took over the canned fish category. The sardine sandwich is now considered eccentric; in 1935 it was simply lunch.",
      type: "Luncheonette",
      servings: 1,
      servings: 1,
      description: "Canned sardines with thin-sliced raw onion and mustard on rye bread — the Depression-era budget lunch that fed millions when meat was unaffordable.",
      ingredients: ["1 can sardines in olive oil, drained", "2-3 thin slices raw white or red onion", "1 tbsp spicy brown mustard", "1 tsp fresh lemon juice", "2 slices rye bread", "Optional: 1 leaf iceberg lettuce"],
      instructions: ["Drain sardines thoroughly.", "Mash lightly with a fork — they should be rough, not paste-like.", "Mix in lemon juice.", "Spread mustard on both slices of rye bread.", "Layer sardines on one slice.", "Add thin raw onion slices.", "Close sandwich.", "Eat immediately — this is not a sandwich that improves with time.", "Note: this is an acquired taste. If you've never had it, start with a small portion."]
    },
    {
      name: "Fall River Chow Mein Sandwich",
      region: "Fall River, Massachusetts and surrounding southeastern New England; this regional oddity was popular from the 1920s through the 1960s and is still found at a handful of Massachusetts Chinese-American restaurants",
      notable: "The Fall River Chow Mein Sandwich is one of the most genuinely bizarre regional American foods — crispy chow mein noodles between hamburger buns, drenched in thick brown gravy. It exists nowhere else in the world. Nathan's and Howard Johnson's once featured versions on their menus nationwide.",
      history: "The chow mein sandwich emerged in Fall River, Massachusetts in the 1920s from the city's large Chinese-American community, which had arrived to work in the textile mills. The dish bridged two cultures in an unexpected way: American-style hamburger buns filled with Americanized Chinese chow mein noodles, drenched in a thick brown gravy that bore little resemblance to actual Chinese cooking. Fall River's Portuguese and working-class immigrant communities embraced it as an inexpensive, filling lunch. The dish spread briefly to Howard Johnson's and Nathan's menus in the 1940s and 50s before retreating to its New England home. Today it survives at a handful of Fall River restaurants that have served it continuously for nearly a century.",
      type: "Luncheonette",
      servings: 2,
      servings: 2,
      description: "The bizarre New England regional classic — crispy chow mein noodles piled on a hamburger bun and drenched in thick brown gravy. Nowhere else on earth serves this.",
      ingredients: ["1 can (14 oz) La Choy or similar chow mein noodles (crispy)", "GRAVY: 2 cups chicken or beef broth", "2 tbsp cornstarch", "1 tbsp soy sauce", "1 tsp molasses or dark soy", "½ tsp sesame oil", "Salt and pepper", "2 soft hamburger buns"],
      instructions: ["Make gravy: whisk cornstarch into ¼ cup cold broth until smooth.", "Heat remaining broth in a saucepan.", "Whisk in cornstarch mixture, soy sauce, and molasses.", "Stir over medium heat until thick and glossy.", "Add sesame oil. Season with salt and pepper.", "Toast hamburger buns lightly.", "Pile crispy chow mein noodles generously on the bottom bun.", "Ladle hot gravy liberally over noodles.", "Add top bun.", "Eat immediately — the noodles should go from crispy to pleasantly soggy as you eat.", "This is not a sandwich you can overthink."]
    },
  ],

  "1940s": [
    {
      name: "Victory Garden Vegetable Soup",
      region: "Nationwide; Victory Gardens were planted in backyards, vacant lots, and public parks in every American city",
      notable: "By 1943, Americans were growing over 20 million Victory Gardens producing roughly 40% of the nation's vegetables. Eleanor Roosevelt planted one on the White House lawn despite resistance from the USDA.",
      history: "Victory Gardens were a deliberate government program to reduce civilian pressure on the commercial food supply during World War II, freeing canned and commercial vegetables for military use. The USDA promoted gardening with extraordinary propaganda intensity — posters, radio programs, and school curricula all carried the message. The resulting surplus of fresh vegetables led to a wave of home canning and to soups like this one, which made a virtue of variety. It was patriotic cooking: use what you grew, waste nothing.",
      type: "Soup",
      difficulty: 1,
      servings: 8,
      servings: 2,
      servings: 1,
      description: "Made entirely from backyard garden produce — during wartime rationing, every household was encouraged to grow their own, and this soup used it all.",
      ingredients: ["2 cups green beans, chopped", "2 cups tomatoes, diced", "2 cups corn kernels", "2 carrots, sliced", "1 cup lima beans", "1 onion, chopped", "2 cups cabbage, shredded", "4 cups vegetable broth", "Salt, pepper, herbs"],
      instructions: ["Combine all vegetables in a large pot with broth.", "Add salt, pepper, and whatever fresh herbs are available.", "Bring to a boil and simmer 30-40 minutes until all vegetables are tender.", "Adjust seasoning. The soup thickens as corn breaks down.", "Serve with crackers or cornbread. This soup improves the next day."]
    },
    {
      name: "Spam Fritters",
      region: "Nationwide in America; also enormously popular in Hawaii, the Pacific Islands, and Britain, where it remains so today",
      notable: "Hormel introduced Spam in 1937, but World War II made it globally ubiquitous — the U.S. military shipped over 150 million pounds to Allied troops worldwide. Nikita Khrushchev credited Spam with keeping the Soviet Army fed.",
      history: "Spam arrived just before the war but became defined by it. When meat rationing limited fresh protein, canned Spam offered something that required no refrigeration, no butchering, and no waste. Spam fritters were a British innovation that spread through the Allied world. In Hawaii, Spam's wartime arrival created a cultural attachment that has never faded — Hawaii remains the highest per-capita Spam consuming state in the U.S. In continental America, however, Spam's association with wartime scarcity gave it a stigma that postwar prosperity made permanent.",
      type: "Main",
      difficulty: 1,
      servings: 4,
      description: "Sliced Spam dipped in a simple batter and pan-fried — Spam became ubiquitous during wartime rationing, and these fritters made it into a proper meal.",
      ingredients: ["1 can Spam, cut into ½-inch slices", "1 cup flour", "1 tsp baking powder", "¾ cup milk", "1 egg", "Salt, pepper", "Oil or lard for frying"],
      instructions: ["Mix flour, baking powder, salt, and pepper.", "Beat in milk and egg to form a smooth batter.", "Dip Spam slices in batter to coat.", "Fry in ½ inch of hot fat over medium heat, 3 minutes per side until golden.", "Drain and serve with mustard or chutney."]
    },
    {
      name: "Oysters Bienville",
      region: "New Orleans, Louisiana; created at Antoine's Restaurant around 1940",
      notable: "The dish was named for Jean Baptiste LeMoyne, Sieur de Bienville, who in 1718 — with the help of eighty French exiles — cleared some wilderness near the mouth of the Mississippi River and established La Nouvelle Orléans. Antoine's has served the dish continuously since its creation.",
      history: "Oysters Bienville was created around 1940 by Roy Alciatore and his chef Pete Michel at Antoine's Restaurant in New Orleans — the oldest restaurant in continuous family operation in America, founded in 1840. Unlike Oysters Rockefeller, which Antoine's guards as a complete secret, the Bienville recipe has been published and is documented in the Antoine's Restaurant Since 1840 Cookbook. The dish's combination of a rich béchamel-based sauce with green pepper, scallions, wine, and pimento baked over oysters on the half shell represents the pinnacle of New Orleans Creole appetizer cooking.",
      type: "Appetizer",
      difficulty: 4,
      servings: 6,
      description: "Raw oysters on the half shell blanketed in a rich béchamel sauce with green pepper, scallions, white wine, and pimento, then baked until bubbling — Antoine's Restaurant's great contribution to the New Orleans oyster canon.",
      ingredients: [
        "BÉCHAMEL SAUCE: 3 tbsp butter",
        "BÉCHAMEL SAUCE: 3 tbsp flour",
        "BÉCHAMEL SAUCE: 2 cups warm scalded milk",
        "BÉCHAMEL SAUCE: ½ tsp salt (or to taste)",
        "BÉCHAMEL SAUCE: ⅛ tsp white pepper (or to taste)",
        "BIENVILLE SAUCE: ¼ cup (½ stick) butter",
        "BIENVILLE SAUCE: 1½ cups minced green bell pepper (about 2 medium)",
        "BIENVILLE SAUCE: 1 cup minced scallions (10 to 12 large scallions)",
        "BIENVILLE SAUCE: 2 cloves garlic, peeled and minced",
        "BIENVILLE SAUCE: ½ cup dry white wine",
        "BIENVILLE SAUCE: ½ cup chopped pimento",
        "BIENVILLE SAUCE: ⅔ cup shredded American cheese",
        "BIENVILLE SAUCE: ½ cup fine soft bread crumbs",
        "BIENVILLE SAUCE: ½ tsp salt (or to taste)",
        "BIENVILLE SAUCE: ⅛ tsp white pepper (or to taste)",
        "3 dozen raw oysters on the half shell",
        "6 (9-inch) pie pans filled with rock salt"
      ],
      instructions: [
        "BÉCHAMEL: Melt butter in a small heavy saucepan over moderate heat. Blend in flour and cook, stirring, until foamy — 1 to 2 minutes.",
        "Whisk in milk and cook, stirring constantly, until thickened and smooth — 3 to 5 minutes. Season with salt and pepper, cover, and keep warm.",
        "BIENVILLE SAUCE: Melt butter in a large heavy saucepan over moderate heat. Add green pepper, scallions, and garlic and sauté until glassy — 2 to 3 minutes.",
        "Add wine and bring to a boil. Add pimento, béchamel, cheese, bread crumbs, salt, and pepper to taste and simmer slowly, stirring often, until very thick — about 15 minutes.",
        "OYSTERS: Preheat oven to 400°F. Bed 6 oysters in each pan of rock salt.",
        "Cover each oyster with Bienville Sauce and bake uncovered until bubbly and tipped with brown — about 10 minutes.",
        "Serve at once at the start of an elegant meal."
      ]
    },
    {
      name: "Mock Crab Salad",
      region: "Nationwide; the mock dish tradition flourished wherever wartime rationing created ingredient shortages",
      notable: "Wartime home economics pamphlets published by the USDA featured dozens of mock recipes — Mock Duck, Mock Chicken, Mock Apple Pie — as ways to maintain the appearance of normal eating under restricted conditions.",
      history: "The mock recipe was a distinctly wartime genre — a way to simulate an unavailable or expensive ingredient using something cheaper and accessible. Mock crab salad worked because canned tuna, shredded finely and dressed with the same flavors, produced something convincingly similar in texture and taste. The psychological importance of the mock recipe was as significant as its practical value: it allowed families to maintain a sense of normal eating even when normal ingredients were not available.",
      type: "Luncheonette",
      difficulty: 2,
      servings: 4,
      description: "Flaked canned tuna dressed to resemble crab salad — a wartime ingenuity dish when real crab was expensive or unavailable.",
      ingredients: ["2 cans tuna, drained and flaked", "1 cup celery, minced", "1 tbsp onion, grated", "½ cup mayonnaise", "1 tsp lemon juice", "1 tsp dry mustard", "Salt, white pepper", "Lettuce for serving"],
      instructions: ["Flake tuna very finely to mimic crab texture.", "Mix with celery and onion.", "Combine mayonnaise, lemon juice, and mustard.", "Fold dressing into tuna mixture. Season.", "Serve chilled on lettuce or stuffed into tomatoes."]
    },
    {
      name: "Baked Bean Casserole with Franks",
      region: "Nationwide; particularly associated with New England and the Midwest, where baked beans already had deep roots",
      notable: "This dish was a standard in U.S. military mess halls and in school cafeterias throughout the 1940s and 50s, reaching its institutional peak as a fixture of public school lunch programs.",
      history: "Frankfurters and baked beans combined the two most economical protein sources available during wartime rationing into a single casserole that required no fresh meat, no refrigeration of the main ingredients, and minimal preparation. The dish became a diner and cafeteria institution in the postwar era, appearing on school lunch menus across the country before being crowded out by pizza and hamburgers in the 1970s.",
      type: "Main",
      difficulty: 1,
      servings: 6,
      description: "Canned baked beans baked with sliced frankfurters and brown sugar — an inexpensive wartime protein stretch that became a diner staple.",
      ingredients: ["2 cans (28 oz) baked beans", "6 frankfurters, sliced into rounds", "1 onion, chopped", "¼ cup ketchup", "2 tbsp brown sugar", "1 tbsp prepared mustard", "4 strips bacon"],
      instructions: ["Preheat oven to 350°F.", "Mix beans, frankfurters, onion, ketchup, sugar, and mustard in a baking dish.", "Lay bacon strips on top.", "Bake uncovered 45-55 minutes until bubbly and bacon is crisp."]
    },
    {
      name: "Wartime Carrot Cake",
      region: "Nationwide in America; simultaneously developed in Britain, where the Ministry of Food promoted carrots as a sugar substitute throughout the war",
      notable: "The British Ministry of Food's wartime mascot Doctor Carrot actively promoted carrot cake recipes. The modern cream cheese-frosted version that Americans now know developed in the 1960s and 70s as a health food adaptation.",
      history: "Carrot cake's journey to American classic status passed through wartime necessity. When sugar was rationed in both Britain and America, governments actively promoted carrots as a natural sweetener. After the war, health food movements of the 1960s and 70s rediscovered carrot cake as a nutritious dessert, added cream cheese frosting and walnuts, and turned a wartime compromise into a modern classic. Most people eating carrot cake today have no idea they're eating a descendant of rationing.",
      type: "Dessert",
      difficulty: 2,
      servings: 12,
      description: "During sugar and butter rationing, carrots provided natural sweetness. This was a genuine innovation born of necessity that eventually became a beloved classic.",
      ingredients: ["1½ cups flour", "1 tsp baking soda", "1 tsp cinnamon", "½ tsp salt", "¾ cup sugar (rationed amount)", "2 eggs", "½ cup vegetable oil", "2 cups grated carrots", "½ cup raisins (optional)"],
      instructions: ["Preheat oven to 350°F. Grease a 9-inch pan.", "Sift flour, soda, cinnamon, and salt.", "Beat sugar, eggs, and oil together.", "Fold in dry ingredients, then carrots and raisins.", "Pour into pan. Bake 35-40 minutes until a toothpick comes out clean.", "Cool before frosting — or serve plain as was common during rationing."]
    },
    {
      name: "Creamed Salmon on Toast",
      region: "Nationwide; canned Pacific salmon from Alaska and the Pacific Northwest was one of the most widely distributed wartime proteins",
      notable: "Canned salmon was explicitly promoted by the U.S. government as an unrationed protein alternative during World War II, and recipes for creamed salmon appeared in nearly every wartime government cooking pamphlet.",
      history: "Canned salmon occupied a specific wartime role: unlike beef, pork, and butter, it was not formally rationed, making it a reliable fallback protein throughout the war years. The Pacific salmon canning industry had been established since the 1860s, and pink salmon in particular was cheap and widely distributed. Creamed salmon on toast followed the same formula as creamed chipped beef — a white sauce stretching a small amount of protein over a filling starch base. Its postwar disappearance from fashionable cooking was swift once fresh proteins became available again.",
      type: "Luncheonette",
      difficulty: 2,
      servings: 4,
      description: "Canned salmon folded into a cream sauce and served over toast — canned salmon was not rationed in the U.S. and became a wartime pantry staple.",
      ingredients: ["2 cans (14.75 oz) pink salmon", "3 tbsp butter", "3 tbsp flour", "2 cups milk", "1 tsp lemon juice", "Salt, white pepper", "Toast for serving"],
      instructions: ["Drain salmon; remove bones and skin. Flake coarsely.", "Make cream sauce: melt butter, whisk in flour, add milk. Stir until thick.", "Fold in salmon. Add lemon juice. Season.", "Serve hot over toast. Garnish with a sprinkle of paprika."]
    },
    {
      name: "Browned Butter Noodles",
      region: "Midwestern and Eastern European immigrant communities, particularly German, Polish, and Czech households",
      notable: "Browned butter noodles were a staple of Hungarian and Czech immigrant cooking across the industrial Midwest, carried from Central European traditions where browning butter was a standard technique for building flavor economically.",
      history: "Browned butter noodles came directly from Central European and German immigrant cooking traditions. In countries where butter was expensive, browning it to a nutty, caramelized state — a process that intensifies its flavor dramatically — was a way to make a small amount taste like more. The addition of toasted breadcrumbs added texture and further extended the dish. In the working-class immigrant neighborhoods of Chicago, Cleveland, and Pittsburgh, this was a common weeknight side. It faded as immigrants' descendants assimilated and Central European cooking retreated in favor of mainstream American dishes.",
      type: "Side",
      difficulty: 1,
      servings: 4,
      description: "Egg noodles tossed in deeply browned butter and breadcrumbs — a simple, thrifty side dish that stretched butter's flavor through technique rather than quantity.",
      ingredients: ["12 oz wide egg noodles", "4 tbsp butter", "¼ cup fine dry breadcrumbs", "Salt and pepper", "Fresh parsley, chopped"],
      instructions: ["Cook noodles in salted water until tender. Drain.", "Melt butter in a wide skillet over medium heat. Continue cooking until butter turns golden brown and smells nutty.", "Add breadcrumbs and stir until toasted.", "Toss in noodles. Season with salt and pepper.", "Finish with parsley."]
    },
    {
      name: "Escalloped Cabbage",
      region: "Nationwide; cabbage was one of the few vegetables consistently available and affordable throughout the war years",
      notable: "The USDA's wartime Food Fights for Freedom campaign specifically promoted cabbage recipes as a patriotic and nutritious wartime vegetable, publishing multiple variations of scalloped and creamed cabbage.",
      history: "Escalloped cabbage was a wartime staple born of necessity. Cabbage was cheap, grew well in Victory Gardens, kept without refrigeration, and required no rationing coupons. Cabbage had an image problem even then, considered peasant food in most cultures, and the cream sauce and breadcrumb treatment was an attempt to elevate it. After the war, as aspirational cooking moved toward French techniques and fresh meats, escalloped cabbage retreated entirely.",
      type: "Side",
      difficulty: 2,
      servings: 6,
      description: "Cabbage layered with cream sauce and breadcrumbs and baked — a cheap wartime vegetable dressed up into something worth putting on the table.",
      ingredients: ["1 medium head cabbage, cut in wedges", "3 tbsp butter", "3 tbsp flour", "2 cups milk", "½ tsp dry mustard", "Salt, pepper", "1 cup breadcrumbs, buttered"],
      instructions: ["Parboil cabbage wedges 5 minutes. Drain well.", "Make mustard cream sauce: melt butter, whisk in flour and mustard, add milk.", "Layer cabbage and sauce in a buttered baking dish.", "Top with buttered breadcrumbs.", "Bake at 375°F for 25-30 minutes until golden and bubbling."]
    },
    {
      name: "Potato Soup (Plain)",
      region: "Nationwide; Irish-American communities kept this soup central to their cooking throughout the 20th century, having inherited it from a culture where potato soup was a matter of survival",
      notable: "Plain potato soup was specifically promoted in wartime cooking guides as an ideal unrationed meal — it required no rationing coupons of any kind and was filling enough to serve as a complete supper.",
      history: "Plain potato soup occupies the opposite end of the culinary spectrum from Vichyssoise. While Louis Diat's elegant cold cream preparation was served in fine hotel dining rooms, the plain potato soup was made in the kitchens of working people from the Irish immigration waves of the 1840s onward. During the war years it was particularly valuable as a filling, nourishing meal that used no rationed ingredients. The soup's simplicity was its virtue, though that same simplicity made it hard to defend once postwar prosperity offered more interesting options.",
      type: "Soup",
      difficulty: 1,
      servings: 4,
      description: "Cubed potatoes simmered in water with onion, finished with milk and a lump of butter — a wartime soup of extraordinary simplicity that needed nothing more.",
      ingredients: ["4 large potatoes, diced", "1 large onion, diced", "3 cups water", "2 cups whole milk", "2 tbsp butter", "Salt and pepper", "Chives or parsley to garnish"],
      instructions: ["Combine potatoes, onion, and water. Bring to a boil.", "Simmer 20 minutes until potatoes are very tender.", "Mash some potatoes in the pot for thickness.", "Stir in milk and butter. Heat through — do not boil.", "Season generously. Serve with chives."]
    },
    {
      name: "Porcupine Meatballs (Rice-Stuffed)",
      region: "Nationwide; a staple of American home cooking from the 1940s through the 1960s, appearing in nearly every women's magazine recipe section",
      notable: "Porcupine meatballs appear in Betty Crocker's wartime recipe guides — a rare example of a dish genuinely invented to solve a rationing problem that also became genuinely beloved.",
      history: "Porcupine meatballs were a Depression and wartime solution to stretching a small amount of ground beef. By mixing raw rice directly into the meat and simmering the meatballs in liquid, the rice absorbed the cooking liquid as it expanded, cooking from within while creating the characteristic spiky surface. The technique was clever: the rice cooked inside the meat, absorbing all the tomato flavor, making the meatballs substantial enough to feed a family with far less beef than a traditional meatball would require. The dish was a fixture of mid-century American home cooking before vanishing from fashion in the 1970s.",
      type: "Main",
      difficulty: 2,
      servings: 4,
      description: "Ground beef mixed with raw rice and simmered in tomato soup — the rice expands through the meatballs as they cook, creating spiky 'quills.' A genuine wartime budget classic.",
      ingredients: ["1 lb ground beef", "½ cup raw long-grain rice", "1 small onion, grated", "Salt, pepper", "1 can condensed tomato soup", "1 can water"],
      instructions: ["Mix beef, rice, onion, salt, and pepper. Form into golf ball-size balls.", "Blend tomato soup with one soup can of water in a wide pot.", "Bring sauce to a simmer; add meatballs in a single layer.", "Cover and cook over very low heat for 45-50 minutes until rice is fully cooked.", "Serve over mashed potatoes."]
    },
    {
      name: "Stuffed Dates with Cream Cheese",
      region: "Nationwide; California date production in the Coachella Valley made dates an affordable ingredient from the 1920s onward",
      notable: "Stuffed dates were a fixture of wartime holiday entertaining precisely because they required no rationing coupons — dates, cream cheese, and nuts were all unrationed, making them one of the few genuinely festive party foods available.",
      history: "Stuffed dates existed in American entertaining before the war, but they came into their own during rationing precisely because they circumvented the shortage. When butter, sugar, and meat were rationed, a plate of stuffed dates offered sweetness and luxury without requiring a single coupon. California had been producing Medjool dates commercially since the 1920s, and they were reasonably priced and shelf-stable. They were a wartime party food that signaled you could still manage a gracious table despite everything.",
      type: "Appetizer",
      difficulty: 1,
      servings: 24,
      description: "Pitted dates filled with cream cheese or a walnut half and rolled in sugar — a simple party nibble from the wartime era when elaborate entertaining wasn't possible.",
      ingredients: ["24 large Medjool dates", "8 oz cream cheese, softened", "24 walnut halves (optional)", "Powdered sugar for rolling"],
      instructions: ["Slit dates lengthwise and remove pits.", "Fill each date with a small spoonful of cream cheese or tuck in a walnut half.", "Pinch closed.", "Roll lightly in powdered sugar.", "Arrange on a platter. Refrigerate until serving."]
    },
    {
      name: "Watercress Sandwiches",
      region: "East Coast cities, particularly New York and Boston, where British cultural influence remained strong in women's club culture",
      notable: "Watercress sandwiches were a staple at the wartime tea parties organized by British War Relief societies across American East Coast cities, where British-influenced entertaining traditions were consciously maintained.",
      history: "Watercress sandwiches came directly from English afternoon tea culture, where the contrast of peppery watercress against cold butter and white bread was considered one of the great simple pleasures of the table. During the war, with elaborate entertaining impossible, the simple watercress sandwich offered genuine elegance on minimal resources — watercress grew wild in streams, required no rationing, and cost almost nothing. The precise, crusts-trimmed presentation made them seem more formal than their ingredients warranted.",
      type: "Luncheonette",
      difficulty: 2,
      servings: 8,
      description: "Fresh watercress on thin buttered white bread — a delicate British-influenced sandwich that appeared at wartime teas and club lunches across America.",
      ingredients: ["1 bunch fresh watercress, thick stems removed", "Thin-sliced white bread", "Softened unsalted butter", "Salt", "White pepper"],
      instructions: ["Butter bread generously, going all the way to the edges.", "Lay a single layer of watercress on half the slices.", "Season lightly with salt and white pepper.", "Top with remaining slices, press gently.", "Trim all crusts with a sharp knife.", "Cut into fingers or triangles. Serve within 30 minutes."]
    },
    {
      name: "Baked Custard",
      region: "Nationwide; baked custard crossed all class and regional lines and appeared in every American cookbook from the colonial era onward",
      notable: "Baked custard was specifically recommended in wartime government cooking guides as an excellent use of eggs, which were not rationed, and as a vehicle for the dried or evaporated milk that replaced fresh during shortages.",
      history: "Baked custard is one of the oldest American desserts, carried from English and French cooking traditions in the colonial era. Its wartime relevance was specific: eggs were not rationed, and milk could be replaced with evaporated milk without catastrophic effect. This made custard one of the few desserts that remained accessible throughout the war years. Its simplicity made it a teaching dessert in domestic science classes for a century, and it appeared in nursing home and hospital menus as a gentle, digestible sweet. These institutional associations eventually contributed to its decline as a home dessert choice.",
      type: "Dessert",
      difficulty: 2,
      servings: 6,
      description: "A simple custard of eggs, milk, and sugar baked in individual cups — when you couldn't get fancy dessert ingredients, a plain custard was what appeared on the table.",
      ingredients: ["3 cups whole milk", "4 eggs", "⅓ cup sugar", "1 tsp vanilla extract", "Pinch of salt", "Nutmeg for topping"],
      instructions: ["Preheat oven to 325°F.", "Scald milk. Beat eggs with sugar, vanilla, and salt.", "Slowly whisk hot milk into egg mixture.", "Strain through a sieve into custard cups.", "Grate a little nutmeg on top of each.", "Set cups in a water bath. Bake 40-50 minutes until just set.", "Serve warm or chilled."]
    },
    {
      name: "Chow Mein (American Canned Style)",
      region: "Nationwide; La Choy brand canned chow mein brought Americanized Chinese food to every supermarket in the country",
      notable: "La Choy began selling canned chow mein ingredients in 1922 and launched an enormous advertising campaign in the 1940s. The company's slogan was La Choy makes Chinese food swing American.",
      history: "La Choy's canned chow mein introduced the concept of Chinese cooking to millions of Americans who had never been to a Chinese restaurant, while producing something entirely divorced from actual Chinese cuisine. The 1940s version used La Choy's canned bean sprouts and water chestnuts in a thick brown sauce poured over crispy fried noodles. Real chow mein, a Cantonese noodle dish, bears no resemblance. But the La Choy product was convenient, affordable, and required no exotic ingredients, making it one of the most successful prepared foods of the wartime era.",
      type: "Main",
      difficulty: 1,
      servings: 4,
      description: "Cooked celery and onion in a cornstarch-thickened sauce over crispy chow mein noodles from a can — nothing like Chinese food, but wildly popular in the 1940s.",
      ingredients: ["1 lb pork or chicken, sliced thin", "3 cups celery, sliced diagonally", "1 large onion, sliced", "1 cup bean sprouts", "2 cups chicken broth", "2 tbsp soy sauce", "2 tbsp cornstarch", "Canned chow mein noodles for serving"],
      instructions: ["Stir-fry meat until cooked through. Remove.", "Cook celery and onion in same pan until slightly tender.", "Add bean sprouts and return meat.", "Mix broth, soy sauce, and cornstarch. Pour over.", "Stir and cook until sauce thickens and glosses.", "Serve over (not mixed with) crispy chow mein noodles."]
    },
    {
      name: "War Cake (Eggless Spice Cake)",
      region: "Nationwide in America; an almost identical recipe was simultaneously developed in Canada and Britain under the same wartime rationing pressures",
      notable: "The War Cake recipe was distributed by the U.S. government through the Office of Price Administration. The recipe dates back to World War I as well — it was rediscovered and reprinted for World War II.",
      history: "War Cake is one of history's most honest recipe names: it exists because of war. The recipe was first circulated during World War I when butter, eggs, and milk were scarce, and reprinted and distributed again during World War II when the same ingredients were rationed. The chemistry relies on the moisture and pectin in raisins, the fat from lard or shortening, and intense spices to compensate for the absent enriching ingredients. The result is genuinely good — denser and more complex than a conventional spice cake. It has been rediscovered repeatedly by vegan cooks who appreciate that it produces a moist cake without any animal products.",
      type: "Dessert",
      difficulty: 2,
      servings: 12,
      description: "A moist spice cake made without eggs, milk, or butter — all of which were rationed. Raisins and spices carry it, and it was astonishingly good for what it had to work with.",
      ingredients: ["2 cups flour", "1 tsp baking soda", "1 tsp cinnamon", "½ tsp cloves", "½ tsp nutmeg", "1 cup brown sugar", "1½ cups water", "1 cup raisins", "⅓ cup lard or vegetable shortening", "1 tsp salt"],
      instructions: ["Boil together water, sugar, raisins, lard, spices, and salt for 3 minutes.", "Cool completely.", "Sift flour and baking soda. Stir into cooled raisin mixture.", "Pour into a greased 9-inch pan.", "Bake at 325°F for 45-55 minutes until a toothpick comes out clean.", "Serve plain or with a dusting of powdered sugar."]
    },
    {
      name: "The Pilots Delight",
      region: "Lunken Airport, Cincinnati, Ohio; a documented menu item at the airport lunch counter, circa 1945-1955",
      notable: "The Lunken Airport counter menu featured several aviation-themed sandwiches — the Lunken Special, the Pilot's Delight, the Cockpit Special, and the Hi-Flyer — each a variation on the club sandwich format. Lunken Airport, opened in 1925, was Cincinnati's main commercial airport until 1947.",
      history: "Lunken Municipal Airport in Cincinnati was the primary commercial airport for the region from its opening in 1925 through the late 1940s. The airport lunch counter served travelers, pilots, and ground crews with a menu that mixed standard American diner fare with aviation-themed specialty sandwiches. The Pilot's Delight — sliced chicken, bacon, lettuce, and tomato on toasted bread — was a variation on the club sandwich made fashionable for the airport setting. The menu has survived in the Lunken Airport archives and represents one of the most complete records of mid-century American airport food culture.",
      type: "Luncheonette",
      difficulty: 2,
      servings: 1,
      description: "From the Lunken Airport lunch counter menu: sliced chicken, crisp bacon, lettuce, and tomato on toasted bread — the aviation-era club sandwich at 45 cents.",
      ingredients: ["3 slices white sandwich bread, toasted", "3 oz sliced cooked chicken breast", "3 strips crisp bacon", "2 leaves iceberg lettuce", "3 slices ripe tomato", "2 tbsp mayonnaise", "Salt and black pepper", "Toothpick with olive or pickle flag"],
      instructions: ["Toast all three slices of bread.", "Spread mayonnaise on all three slices.", "First layer: place chicken and half the lettuce on bottom toast slice.", "Place middle toast slice on top.", "Second layer: bacon, tomato, remaining lettuce.", "Season tomato with salt and pepper.", "Top with third slice.", "Cut diagonally into 4 triangles.", "Secure each triangle with a toothpick.", "Serve with potato chips and a dill pickle.", "This is exactly how it was served at the Lunken Airport counter."]
    },
    {
      name: "Postum (Grain Coffee Substitute)",
      region: "Nationwide; Postum was created by C.W. Post in Battle Creek, Michigan in 1895 and became one of the best-selling beverages in America",
      notable: "At its peak in the 1920s-40s, Postum outsold coffee in some American markets. The Lunken Airport menu listed it at 5 cents alongside coffee, hot tea, and iced tea. It was discontinued by Kraft Foods in 2007, then relaunched by a small company in 2013.",
      history: "Charles William Post created Postum in 1895 in Battle Creek, Michigan as a health alternative to coffee. Post was a patient at John Harvey Kellogg's sanitarium, where coffee was forbidden, and he created a roasted grain beverage as a substitute. Post's marketing genius — he ran aggressive anti-coffee campaigns calling coffee 'brain poison' and 'nerve-jangling' — made Postum enormously successful. During World War II, coffee rationing made Postum genuinely necessary rather than optional, and its sales peaked. After the war, coffee's return to abundance ended Postum's moment, and it gradually declined until Kraft discontinued it in 2007.",
      type: "Luncheonette",
      difficulty: 1,
      servings: 1,
      description: "The grain-based coffee substitute that millions of Americans drank for breakfast — roasted wheat bran and molasses brewed like coffee. Nutty, slightly sweet, and completely caffeine-free.",
      ingredients: ["2 tsp Postum powder (or roasted chicory/grain powder as substitute)", "8 oz boiling water", "Whole milk or cream to taste", "Sugar to taste"],
      instructions: ["Bring water to a full boil.", "Add Postum powder and stir vigorously.", "Pour into a cup.", "Add milk or cream and sugar to taste.", "Postum is stronger and slightly sweeter than coffee — use less powder for a lighter cup.", "Serve in a heavy ceramic diner mug.", "This was the 5-cent morning drink for millions of Americans who couldn't afford or chose not to drink coffee."]
    },
    {
      name: "Monte Cristo Sandwich",
      region: "Nationwide; floating around American cookbooks since the 1930s as 'French Toasted Cheese Sandwich'; named Monte Cristo in Southern California in the 1950s and immortalized at Disneyland from 1966 onward",
      notable: "The Monte Cristo became nationally famous when Disneyland put it on the menu at the Blue Bayou and Tahitian Terrace restaurants in 1966 — served with powdered sugar and raspberry jam, an oddly perfect combination. It has been on the Disneyland menu almost continuously ever since.",
      history: "The Monte Cristo is an American adaptation of the French croque monsieur — a hot, pressed ham and cheese sandwich — that went through several evolutions before landing on its signature form. American versions appeared as 'French Toasted Cheese Sandwiches' in 1930s cookbooks. By the 1950s the name Monte Cristo was in use in Southern California restaurants. Its apotheosis came in 1966 when Disneyland placed it on two of its restaurant menus, serving it dusted with powdered sugar alongside raspberry jam. This apparently bizarre combination — savory fried sandwich with jam and powdered sugar — is in fact a French tradition and is genuinely excellent.",
      type: "Luncheonette",
      servings: 1,
      description: "Ham, turkey, and Swiss cheese between white bread, dipped in egg batter and pan-fried until golden, dusted with powdered sugar and served with raspberry jam — the Disneyland classic.",
      ingredients: ["2 slices thick white bread", "2 oz sliced ham", "2 oz sliced turkey", "2 slices Swiss cheese", "EGG BATTER: 1 egg", "¼ cup milk", "Pinch salt", "Butter for frying", "Powdered sugar to finish", "Raspberry jam to serve"],
      instructions: ["Layer ham, turkey, and both slices of cheese between the bread.", "Beat egg with milk and salt in a shallow dish.", "Melt butter generously in a skillet over medium heat.", "Dip sandwich in egg batter, coating both sides thoroughly.", "Cook 3-4 minutes per side until deep golden brown and cheese is melted.", "Remove to a plate.", "Dust generously with powdered sugar immediately.", "Serve with raspberry jam alongside for dipping.", "The powdered sugar is not optional — it's the point."]
    },
    {
      name: "Deviled Ham Spread Sandwich",
      region: "Nationwide; deviled ham was one of the most widely sold canned products in America from the 1890s through the 1970s, appearing on lunch counter menus and in home kitchens from coast to coast",
      notable: "Underwood Deviled Ham, introduced in 1868, is the oldest trademarked canned food product still sold in America. The red devil logo on the can has been there since 1870 and is the oldest food trademark in continuous use in the United States.",
      history: "Deviled ham — ground ham seasoned with mustard, cayenne, and spices — was one of William Underwood's original canned products, introduced in 1868. The word 'deviled' referred to the spiced, piquant preparation, a term borrowed from British cooking. By the early 20th century deviled ham spread was standard at bridge club meetings, church potlucks, and lunch counters everywhere. It was considered a sophisticated shortcut — a canned product that tasted homemade. Its decline began in the 1970s as processed foods fell from fashion and the association with convenience cooking became a liability rather than a selling point. The can is still on grocery shelves but the culture that made it fashionable is entirely gone.",
      type: "Luncheonette",
      servings: 4,
      description: "The spiced ground ham spread that was on every lunch counter and bridge table in America — served on white bread with mustard and pickles, or on crackers as an appetizer.",
      ingredients: ["1 can (4.25 oz) Underwood Deviled Ham", "2 tbsp cream cheese, softened", "1 tsp Dijon mustard", "1 tsp prepared horseradish", "Dash of Worcestershire sauce", "White sandwich bread or crackers", "Bread and butter pickles to serve"],
      instructions: ["Combine deviled ham, cream cheese, mustard, horseradish, and Worcestershire in a bowl.", "Mix until smooth and well combined.", "Taste — adjust seasoning with more mustard or horseradish if desired.", "For sandwiches: spread generously on white bread with bread and butter pickles.", "For a proper 1940s presentation: spread on crackers and arrange on a plate.", "For a cocktail party: pipe onto small rounds of white bread using a pastry bag.", "Refrigerate any leftovers — it keeps well for 3 days.", "Note: you can make this from scratch with ground cooked ham, but the canned version is historically accurate and genuinely good."]
    },
  ],

  "1950s": [
    {
      name: "Olive Loaf Sandwich",
      region: "Nationwide; olive loaf's heyday was from the 1940s to 1970s, sold alongside bologna and liverwurst at deli counters in every American supermarket",
      notable: "Olive loaf — along with its sister products pimento loaf and pickle loaf — was marketed specifically to middle- and working-class families as an affordable, festive-looking deli option. The bright green olive dots made it visually distinctive on the deli slicer.",
      history: "Olive loaf is a processed meat product made from ground pork studded with pimento-stuffed green olives, encased and sliced like bologna. It was introduced in the mid-20th century as part of the American deli's golden age, when supermarket deli counters expanded enormously and packaged luncheon meats reached every household. Oscar Mayer and other major producers sold millions of pounds of olive loaf through the 1950s, 60s, and 70s. Its decline began in the 1980s and 90s as health concerns about processed meats reshaped American eating habits, and the category of novelty luncheon meats — pickle loaf, pimento loaf, olive loaf — all but vanished from mainstream delis.",
      type: "Luncheonette",
      difficulty: 1,
      servings: 2,
      servings: 4,
      servings: 1,
      description: "Sliced olive loaf — pork studded with pimento-stuffed green olives — on soft white bread with yellow mustard. A deli counter staple from the 1940s through the 1970s that has almost completely vanished.",
      ingredients: ["4-6 thin slices olive loaf (available at some deli counters; if unavailable, bologna with sliced olives approximates it)", "2 slices soft white sandwich bread", "1 tbsp yellow mustard", "Optional: 1 leaf iceberg lettuce"],
      instructions: ["Spread yellow mustard on one slice of white bread.", "Layer olive loaf slices generously.", "Add lettuce if using.", "Top with second slice of bread.", "Cut diagonally.", "This sandwich requires soft white bread and yellow mustard only — anything else is wrong.", "Serve with potato chips and a dill pickle.", "Note: if you can find actual olive loaf at a deli counter, buy more than you need."]
    },
    {
      name: "Tuna Noodle Casserole",
      region: "Nationwide; the casserole was a defining feature of postwar suburban American cooking, and tuna noodle was its most widespread specimen",
      notable: "Campbell's Soup estimates that tuna noodle casserole made with their cream of mushroom soup was prepared in roughly 90% of American homes at some point during the 1950s and 60s.",
      history: "Tuna noodle casserole was the signature dish of postwar American food culture — the casserole era. The postwar economy produced two trends that combined to make casseroles ubiquitous: affordable processed ingredients and suburban social life that required dishes that could be assembled ahead and baked while guests arrived. Campbell's Soup actively promoted casserole recipes as a way to sell condensed cream of mushroom soup, and the resulting cookbook culture made the casserole central to American entertaining. Tuna noodle was the archetype: cheap, filling, portable, and entirely made from pantry staples.",
      type: "Main",
      difficulty: 1,
      servings: 6,
      description: "The queen of the 1950s casserole era: canned tuna, egg noodles, and cream of mushroom soup, topped with crushed potato chips. Every American family had a version.",
      ingredients: ["2 cans (5 oz) tuna, drained", "3 cups cooked egg noodles", "1 can condensed cream of mushroom soup", "½ cup milk", "1 cup frozen peas", "½ cup cheddar, shredded", "1 cup potato chips, crushed"],
      instructions: ["Preheat oven to 375°F.", "Mix soup and milk until smooth. Combine with tuna, noodles, peas, and half the cheese.", "Pour into a greased 2-quart baking dish.", "Top with remaining cheese and crushed potato chips.", "Bake 25-30 minutes until bubbling and golden on top."]
    },
    {
      name: "Sweet 'n' Sour Meatballs",
      region: "Nationwide; became a chafing dish party staple in the late 1950s",
      notable: "This recipe was sent to Jean Anderson by Marilyn Brown, manager of the Consumer Test Kitchens at H.J. Heinz in Pittsburgh. It was often — but not always — served from chafing dishes with plenty of toothpicks and napkins placed nearby.",
      history: "Sweet and sour meatballs became one of the defining appetizers of late 1950s American entertaining. The combination of ground beef meatballs simmered in chili sauce and grape or red currant jelly was a product of postwar American ingenuity — taking readily available pantry ingredients and producing something that felt festive and slightly exotic. The chafing dish presentation was essential to the social theater of the era. The dish spread through women's magazines and community cookbooks throughout the 1960s and remains a potluck staple in many parts of America.",
      type: "Appetizer",
      difficulty: 2,
      servings: 10,
      description: "Bite-size beef meatballs simmered in a glossy chili sauce and grape jelly glaze — the chafing dish party staple of the late 1950s and 60s, served with toothpicks.",
      ingredients: [
        "1 lb lean ground beef",
        "1 cup soft white bread crumbs",
        "1 egg, slightly beaten",
        "2 tbsp milk",
        "2 tbsp minced yellow onion",
        "1 clove garlic, peeled and minced",
        "½ tsp salt",
        "⅛ tsp black pepper",
        "1 tbsp vegetable oil",
        "⅔ cup chili sauce or ketchup",
        "⅔ cup grape or red currant jelly"
      ],
      instructions: [
        "Mix beef, bread crumbs, egg, milk, onion, garlic, salt, and pepper and shape into 40 bite-size balls.",
        "Heat oil in a large, heavy nonstick skillet over moderately high heat, add meatballs, and brown lightly on all sides — 2 to 3 minutes.",
        "Reduce heat to low, cover, and cook 5 minutes; drain off excess drippings.",
        "Mix chili sauce and jelly, pour over meatballs, and heat, stirring occasionally, until sauce thickens and meatballs are nicely glazed — 10 to 12 minutes.",
        "Serve hot with toothpicks."
      ]
    },
    {
      name: "Beef Stroganoff (Sour Cream Version)",
      region: "Nationwide in America; brought via Russian émigré cooking through Paris and then to New York in the 1930s and 40s before becoming a suburban dinner party staple",
      notable: "James Beard featured Beef Stroganoff prominently in his 1950s cooking guides as the ultimate sophisticated dinner party main course — the dish that separated serious home cooks from casual ones.",
      history: "Beef Stroganoff has a complicated American journey. The original Russian dish — named for the Stroganov family of Ural industrialists — arrived in American restaurants via Russian émigrés in Paris and New York in the 1930s. American cookbook writers in the postwar era adapted it for the suburban kitchen, and it became the signature aspirational dinner party dish of the 1950s: it required technique, used expensive ingredients, and looked elegant on the plate. The dish's fall from grace in the 1970s and 80s was partly a backlash against cream-heavy dishes and partly the rise of lighter preparations.",
      type: "Main",
      difficulty: 3,
      servings: 4,
      description: "Thin-sliced beef in a tangy mushroom and sour cream sauce over egg noodles — the 1950s dinner party crown jewel, now rarely seen in its original form.",
      ingredients: ["1½ lbs beef tenderloin or sirloin, sliced thin", "1 lb mushrooms, sliced", "1 large onion, thinly sliced", "3 tbsp butter", "1 cup beef broth", "1 cup sour cream", "1 tbsp flour", "Salt, pepper", "Egg noodles for serving"],
      instructions: ["Season beef strips with salt and pepper. Sear in batches in hot butter. Remove.", "Sauté onion and mushrooms until golden.", "Add broth; stir in flour mixed with a little cold water. Simmer 5 minutes.", "Remove from heat. Stir in sour cream — do not boil after this point.", "Return beef to pan. Heat gently. Serve immediately over egg noodles."]
    },
    {
      name: "Pineapple Upside-Down Cake",
      region: "Nationwide; Dole promoted the recipe heavily after introducing canned pineapple rings in the 1920s, and it reached peak popularity in the 1950s",
      notable: "Dole's canned pineapple advertising campaigns, running from the 1920s through the 1950s, were among the most successful in American food history. The company essentially invented the American relationship with pineapple through promotional recipes.",
      history: "Pineapple upside-down cake was a product of the American canning industry's marketing genius. Dole's introduction of sliced pineapple rings in cans in 1925 gave home cooks a perfectly formed, symmetrically beautiful ingredient that seemed designed for this exact cake. The company distributed the recipe on can labels and in magazine advertisements, and by the 1950s the cake was deeply embedded in American baking culture. It was an early example of an industrial product becoming so associated with a recipe that the two seemed inseparable.",
      type: "Dessert",
      difficulty: 2,
      servings: 10,
      description: "Canned pineapple rings and maraschino cherries arranged in caramelized brown sugar, topped with yellow cake batter and flipped — the showstopper dessert of the 1950s.",
      ingredients: ["4 tbsp butter", "¾ cup brown sugar", "1 can (20 oz) pineapple rings, drained", "Maraschino cherries", "1½ cups flour", "1 cup sugar", "2 tsp baking powder", "½ cup butter, softened", "2 eggs", "½ cup pineapple juice", "1 tsp vanilla"],
      instructions: ["Melt 4 tbsp butter in a 10-inch cast iron skillet. Stir in brown sugar.", "Arrange pineapple rings in sugar. Place a cherry in each ring's center.", "Make cake batter: cream butter and sugar; beat in eggs, vanilla. Mix in flour and baking powder alternately with pineapple juice.", "Carefully pour batter over fruit.", "Bake at 350°F for 40-45 minutes. Let rest 5 minutes, then invert onto a plate."]
    },
    {
      name: "Green Bean Casserole (Original)",
      region: "Nationwide; created specifically to use Campbell's cream of mushroom soup — a corporate recipe that became an American institution",
      notable: "Created by Dorcas Reilly at the Campbell's Soup test kitchen in 1955. The original recipe card is now on permanent display at the National Inventors Hall of Fame in Akron, Ohio.",
      history: "Green Bean Casserole is arguably the most successful corporate recipe in American culinary history. Dorcas Reilly created it in 1955 specifically to promote Campbell's condensed cream of mushroom soup — the recipe was printed on the can's label and distributed in millions of copies. It spread through the church supper, potluck, and holiday dinner circuits with extraordinary speed. By the 1960s it was appearing on Thanksgiving tables across the country, a position it has never surrendered.",
      type: "Side",
      difficulty: 1,
      servings: 6,
      description: "The original 1955 Dorcas Reilly recipe for Campbell's: canned green beans, cream of mushroom soup, and French's fried onions on top — simple perfection.",
      ingredients: ["2 cans (14.5 oz) green beans, drained", "1 can condensed cream of mushroom soup", "¾ cup milk", "1 tsp soy sauce", "Black pepper", "1⅓ cups French fried onions, divided"],
      instructions: ["Preheat oven to 350°F.", "Mix soup, milk, and soy sauce until smooth.", "Stir in beans, pepper, and ⅔ cup fried onions.", "Spread in a 1½ quart baking dish.", "Bake 25 minutes until bubbling.", "Top with remaining onions. Bake 5 more minutes."]
    },
    {
      name: "Ambrosia Salad",
      region: "Nationwide, but particularly beloved in the South and Midwest, where it anchored church potlucks and holiday tables",
      notable: "The name ambrosia — food of the Greek gods — was applied to this dish in the 19th century when fresh coconut and oranges were expensive and exotic. By the 1950s, canned versions made it accessible to everyone.",
      history: "Ambrosia has a longer American history than most people realize. The original version in Southern cookbooks from the 1860s was a sophisticated dessert of fresh oranges, fresh coconut, and sugar — genuinely exotic and expensive ingredients that justified the divine name. The 1950s version replaced fresh ingredients with canned fruit and miniature marshmallows — a mid-century democratization of the concept. Jet-Puffed marshmallows were introduced in 1955 and immediately began appearing in recipes of this type. The resulting dish was sweeter, simpler, and more colorful than the original, and it became a potluck and holiday staple that persists in the South.",
      type: "Side/Dessert",
      difficulty: 1,
      servings: 8,
      description: "Canned mandarin oranges, pineapple tidbits, miniature marshmallows, and shredded coconut folded into whipped cream — a pink cloud of mid-century joy.",
      ingredients: ["1 can mandarin oranges, drained", "1 can pineapple tidbits, drained", "1 cup mini marshmallows", "1 cup sweetened shredded coconut", "1 cup maraschino cherries, halved", "1 cup sour cream or whipped cream"],
      instructions: ["Combine all fruits and marshmallows.", "Fold in coconut.", "Stir in sour cream or fold in whipped cream.", "Refrigerate at least 2 hours — overnight is better.", "Serve cold, directly from the bowl."]
    },
    {
      name: "Chicken Divan",
      region: "Created at the Divan Parisien restaurant in New York City's Chatham Hotel; spread nationally through women's magazine recipes in the 1950s",
      notable: "Chicken Divan was the signature dish of the Divan Parisien restaurant, which occupied the Chatham Hotel on Vanderbilt Avenue in Manhattan from the 1930s. It was considered one of the most elegant luncheon dishes in New York.",
      history: "Chicken Divan has a documented restaurant origin — it was created at the Divan Parisien restaurant in New York. The dish moved from restaurant to home kitchen through the 1950s magazine recipe circuit, which regularly translated fashionable restaurant dishes into home-accessible versions. The original used a proper Mornay sauce and dry sherry; home versions often simplified these to canned soup and whatever cheese was available. The dish represented a kind of aspirational cooking — making something that tasted like a restaurant meal at home — that was central to 1950s food culture.",
      type: "Main",
      difficulty: 2,
      servings: 6,
      description: "Broccoli and chicken breast layered under a Mornay-style sauce, baked until golden — the original Divan Parisien dish from New York, popularized in home kitchens in the 1950s.",
      ingredients: ["2 lbs broccoli florets, steamed", "4 cooked chicken breasts, sliced", "3 tbsp butter", "3 tbsp flour", "1½ cups chicken broth", "½ cup cream", "½ cup grated Parmesan", "2 tbsp dry sherry", "Salt, pepper"],
      instructions: ["Arrange broccoli in a buttered baking dish. Layer chicken on top.", "Make sauce: melt butter, whisk in flour, add broth and cream. Stir until thick.", "Add sherry and half the Parmesan. Season.", "Pour sauce over chicken and broccoli.", "Sprinkle remaining Parmesan on top.", "Bake at 400°F for 20-25 minutes until bubbling and lightly browned."]
    },
    {
      name: "Deviled Eggs (Classic)",
      region: "Nationwide, with particular strength in the South, where deviled eggs remain a social institution",
      notable: "In the South, bringing a plate of deviled eggs to a gathering remains a social expectation in many communities to this day. Craig Claiborne of the New York Times wrote affectionately about deviled eggs as quintessential American food.",
      history: "Deviled eggs occupy a peculiar place in American food history — they are one of the few genuinely old dishes that have maintained continuous popularity from the 19th century to the present, while simultaneously being mocked and celebrated as quintessentially retro. The deviled designation, meaning seasoned with mustard and hot spices, dates to the 1800s. The postwar era was their golden age: cheap eggs, the rise of the buffet and potluck as social forms, and the availability of mayonnaise made them the universal party food. They are included here because while they persist in homes, they have largely vanished from restaurant menus.",
      type: "Appetizer",
      difficulty: 1,
      servings: 12,
      description: "Hard-boiled egg halves filled with a mustardy yolk mixture and dusted with paprika — a 1950s party essential that was on every buffet table in America.",
      ingredients: ["12 large eggs, hard-boiled and peeled", "4 tbsp mayonnaise", "2 tsp yellow mustard", "1 tsp white vinegar", "Salt, white pepper", "Sweet paprika for garnish"],
      instructions: ["Slice eggs in half lengthwise. Pop yolks into a bowl.", "Mash yolks with mayonnaise, mustard, vinegar, salt, and pepper until smooth.", "Fill a piping bag or spoon filling into egg white halves.", "Dust generously with paprika.", "Refrigerate until serving."]
    },
    {
      name: "Macaroni Salad",
      region: "Nationwide; the American macaroni salad emerged as a distinct dish in the 1930s and reached its peak in the 1950s backyard barbecue culture",
      notable: "Hellmann's Mayonnaise, introduced in 1913, was the product that made cold mayonnaise-dressed salads possible at scale. The company's promotional recipes shaped American summer food culture for decades.",
      history: "Macaroni salad was a product of two innovations: the widespread availability of commercial elbow macaroni and the rise of commercial mayonnaise. Before shelf-stable mayonnaise, cold pasta salads were not practical. The 1950s backyard barbecue culture made macaroni salad essential: it traveled to picnics without refrigeration problems, fed large groups economically, and could be made a day ahead. The sweet-tangy dressing that characterizes American macaroni salad has no European precedent — it is entirely a New World creation.",
      type: "Side",
      difficulty: 1,
      servings: 8,
      description: "Elbow macaroni in a sweet-tangy mayonnaise dressing with celery, pimento, and hard-boiled egg — the original cookout side dish, not the deli version.",
      ingredients: ["3 cups elbow macaroni, cooked", "3 hard-boiled eggs, chopped", "1 cup celery, diced", "¼ cup pimentos, chopped", "¾ cup mayonnaise", "2 tbsp sweet pickle relish", "1 tbsp cider vinegar", "1 tsp sugar", "Salt, pepper"],
      instructions: ["Cook macaroni al dente; drain and cool.", "Mix mayonnaise, relish, vinegar, and sugar.", "Combine pasta with eggs, celery, and pimentos.", "Fold in dressing. Season to taste.", "Refrigerate at least 2 hours before serving."]
    },
    {
      name: "Lime Jello Mold with Cream Cheese",
      region: "Nationwide; Jell-O molded salads were a national craze from the 1950s through the early 1970s, promoted aggressively by General Foods through magazine advertising",
      notable: "Jell-O was at the absolute peak of its cultural moment in the 1950s — General Foods' promotional cookbooks, featuring molded salads and desserts, were among the most widely distributed cookbooks in American history.",
      history: "The Jell-O mold craze of the 1950s remains one of the stranger chapters in American culinary history. General Foods promoted Jell-O with remarkable marketing intensity, producing promotional cookbooks that portrayed molded gelatin salads as the height of modern, scientific cooking. The lime Jell-O and cream cheese combination was one of the most popular: the cream cheese enriched the gelatin into a semi-solid mousse, and the green color was considered festive. That it sometimes incorporated mayonnaise tells you something about the decade's uneasy relationship with the concept of savory.",
      type: "Dessert",
      difficulty: 2,
      servings: 8,
      description: "Lime Jell-O blended with cream cheese and sometimes mayonnaise — yes, mayonnaise — served as a salad or dessert. This was considered elegant.",
      ingredients: ["1 package (3 oz) lime Jell-O", "1 cup boiling water", "8 oz cream cheese, softened", "½ cup mayonnaise", "1 cup crushed pineapple, drained", "1 cup whipped cream or Cool Whip"],
      instructions: ["Dissolve Jell-O in boiling water. Cool to room temperature.", "Beat cream cheese smooth; blend in mayonnaise.", "Whisk Jell-O into cream cheese mixture until smooth.", "Fold in pineapple and whipped cream.", "Pour into a mold or 8x8 pan.", "Refrigerate until firm, at least 3 hours. Unmold or slice."]
    },
    {
      name: "Sukiyaki (American Home Version)",
      region: "Nationwide, but particularly in cities with significant Japanese-American populations — Los Angeles, San Francisco, Seattle, Honolulu",
      notable: "The song Sukiyaki (Ue o Muite Arukō) by Kyu Sakamoto became the first Japanese song to reach number one on the American pop charts in 1963, and the American title helped cement sukiyaki's cultural presence.",
      history: "Sukiyaki arrived in American consciousness through the postwar occupation of Japan, Japanese-American communities in West Coast cities, and a general mid-1950s fascination with Asian culture. Home entertaining with an electric skillet at the table — cooking sukiyaki communally — became fashionable in suburban America as an exotic dinner party format. The association with the Kyu Sakamoto hit only deepened its cultural presence through the early 1960s, before both the song and the dish were gradually eclipsed by other enthusiasms.",
      type: "Main",
      difficulty: 2,
      servings: 4,
      description: "In the 1950s, Japanese food entered American consciousness and sukiyaki became a popular at-home dinner party dish — thinly sliced beef with vegetables in a sweet soy broth.",
      ingredients: ["1½ lbs beef sirloin, sliced paper-thin", "1 block tofu, cubed", "2 cups napa cabbage, chopped", "6 green onions, cut in 2-inch pieces", "1 cup mushrooms, sliced", "½ cup soy sauce", "¼ cup mirin or sweet sherry", "¼ cup sugar", "½ cup beef broth"],
      instructions: ["Mix soy sauce, mirin, sugar, and broth into sukiyaki sauce.", "In a wide pan or electric skillet at the table, melt a little beef fat or oil.", "Cook beef slices briefly, pushing to one side.", "Add vegetables and tofu in separate groups.", "Pour sauce over everything.", "Cook gently, basting as you go. Serve over rice with a dipping egg yolk if desired."]
    },
    {
      name: "Stuffed Celery with Pimento Cheese",
      region: "Nationwide, with particularly strong roots in the South, where pimento cheese is considered a staple condiment",
      notable: "Pimento cheese has been called the pâté of the South. Craig Claiborne of the New York Times credited it as his favorite food, and it remains central to Southern food culture from football tailgates to debutante balls.",
      history: "Pimento cheese itself dates to the early 1900s, when cream cheese was a New York specialty and Spanish pimentos began being imported in significant quantities. The combination spread south, where it transformed into something far more distinctive — sharper cheddar, more mayonnaise, more spice. By the 1950s, serving stuffed celery as part of a relish tray was a social norm at cocktail parties from coast to coast. The relish tray as an appetizer form has largely disappeared from American entertaining, and stuffed celery with it, though pimento cheese itself remains very much alive in Southern cooking.",
      type: "Appetizer",
      difficulty: 1,
      servings: 8,
      description: "Celery stalks filled with tangy pimento cheese — a ubiquitous 1950s cocktail party nibble that appeared on every relish tray.",
      ingredients: ["1 bunch celery, washed and cut into 3-inch pieces", "8 oz sharp cheddar, finely grated", "4 oz cream cheese, softened", "¼ cup mayonnaise", "¼ cup pimentos, minced", "Pinch cayenne", "Salt, pepper"],
      instructions: ["Beat cream cheese and mayonnaise until smooth.", "Fold in cheddar, pimentos, and cayenne. Season.", "Fill each celery stalk generously with pimento cheese using a spoon or piping bag.", "Arrange on a platter. Refrigerate until firm.", "Serve as part of a relish tray."]
    },
    {
      name: "Hot Crab Dip",
      region: "Baltimore, Maryland; developed in the Baltimore test kitchens of McCormick & Company",
      notable: "The recipe appeared in 100 Best Recipes for 100 Years from McCormick (1988). The headnote describes it as 'a delicious new version of an old Maryland specialty' and specifies that it is 'best made with the backfin meat of the blue crab' — the quintessential Chesapeake Bay ingredient.",
      history: "Hot Crab Dip is a 1950s creation from Baltimore's McCormick & Company test kitchens, designed to showcase the Chesapeake Bay's abundant blue crab in a format suited to the new cocktail party culture. The combination of crabmeat, sour cream, mayonnaise, dillweed, and Bon Appétit seasoning baked until bubbling became a staple of Maryland entertaining. It spread nationally through McCormick's promotional materials and appeared on cocktail party tables from Baltimore to Los Angeles. The use of shaved or slivered almonds on top — a 1950s and 60s garnishing convention — gives it a textural contrast that sets it apart from later crab dip variations.",
      type: "Appetizer",
      difficulty: 2,
      servings: 8,
      description: "Lump crabmeat baked in a sour cream and mayonnaise sauce seasoned with curry powder and dillweed, topped with slivered almonds — a 1950s Baltimore classic from the McCormick test kitchens.",
      ingredients: [
        "1 lb backfin or lump crabmeat",
        "1 cup sour cream",
        "1 cup mayonnaise",
        "1 tsp instant minced onion",
        "¼ tsp curry powder",
        "½ tsp dillweed",
        "½ tsp Bon Appétit seasoning (or seasoned salt)",
        "½ cup shaved or slivered almonds"
      ],
      instructions: [
        "Preheat oven to 350°F. Butter a 1-quart au gratin dish or shallow casserole and set aside.",
        "Pick over crabmeat, discarding bits of shell and cartilage; place in medium bowl and set aside.",
        "Blend sour cream, mayonnaise, onion, curry powder, dillweed, and Bon Appétit seasoning in a small bowl. Add to crab and mix well.",
        "Transfer to au gratin dish and scatter almonds evenly on top.",
        "Bake uncovered until bubbling — about 20 minutes.",
        "Serve as a dip for melba toast, potato chips, or crackers."
      ]
    },
    {
      name: "Swiss Steak",
      region: "Nationwide; swiss refers not to Switzerland but to the textile process of swissing — mechanically compressing fabric to change its texture — applied to beef",
      notable: "Swiss steak has no connection to Switzerland. The swiss refers to the textile process of swissing, which involved mechanically compressing fabric to change its texture — the same idea applied to tough meat.",
      history: "Swiss steak was a brilliant solution to the problem of cheap, tough beef cuts. Round steak and bottom round were naturally too tough to cook quickly, but pounding them with a mallet and braising them long and slow in tomatoes produced something genuinely tender and flavorful. The name puzzled generations of American cooks — swiss refers not to Switzerland but to the textile process applied to make the meat tender. Swiss steak was a standard Sunday dinner in working-class American homes through the 1960s, eventually displaced by the availability of more tender cuts and the rise of the slow cooker.",
      type: "Main",
      difficulty: 2,
      servings: 4,
      description: "Tough round steak tenderized by pounding and braised in tomatoes until fork-tender — a thrifty main course that transformed a cheap cut into Sunday dinner.",
      ingredients: ["2 lbs round steak, cut 1 inch thick", "Flour, salt, pepper for dredging", "3 tbsp oil", "1 large onion, sliced", "1 can (14 oz) diced tomatoes", "1 cup beef broth", "1 green pepper, sliced"],
      instructions: ["Pound steak with a meat mallet. Cut into serving pieces. Dredge in seasoned flour.", "Brown well in oil on both sides. Remove.", "Sauté onion and green pepper.", "Return beef; add tomatoes and broth. Cover tightly.", "Braise at 325°F for 1½-2 hours until very tender.", "Serve with mashed potatoes."]
    },
    {
      name: "Banana Pudding (Southern Style)",
      region: "The American South, where banana pudding is considered a signature regional dessert; Nabisco's Nilla Wafer promotion of the recipe beginning in the 1940s spread it nationally",
      notable: "The recipe for banana pudding was first printed on Nabisco Nilla Wafer boxes in 1945 and has been associated with the brand ever since. The Southern meringue-topped version predates the Nilla Wafer association and is considered the authentic form.",
      history: "Banana pudding arrived in American cooking relatively late — bananas were exotic and expensive until the United Fruit Company's aggressive Caribbean operations in the early 1900s made them cheap and ubiquitous. The Nabisco Nilla Wafer association cemented the specific form of the dish from 1945 onward. The Southern tradition of topping it with meringue and briefly broiling it — making it a proper baked dessert — is the older and more labor-intensive form. The Cool Whip substitution, which now dominates most recipes, dates to the 1970s and represents a significant downgrade in both texture and flavor.",
      type: "Dessert",
      difficulty: 2,
      servings: 8,
      description: "Layers of vanilla wafers, sliced bananas, and homemade vanilla custard, topped with meringue — this is the cooked original, before the Cool Whip era.",
      ingredients: ["¾ cup sugar", "⅓ cup flour", "Pinch salt", "3 cups whole milk", "3 egg yolks", "2 tbsp butter", "2 tsp vanilla", "3 ripe bananas, sliced", "1 box vanilla wafers", "MERINGUE: 3 egg whites", "6 tbsp sugar"],
      instructions: ["Whisk sugar, flour, salt, and milk in a saucepan. Cook over medium heat, stirring, until thick.", "Temper in egg yolks; return to heat and cook 2 more minutes. Remove from heat; stir in butter and vanilla.", "Layer wafers, banana slices, and custard in a deep baking dish. Repeat layers.", "Beat whites to stiff peaks; beat in sugar. Spread over pudding, sealing edges.", "Bake at 350°F for 12-15 minutes until meringue is golden."]
    },
    {
      name: "Tomato Aspic with Shrimp",
      region: "Nationwide, with particular strength in the South, where tomato aspic remained a restaurant and home staple longer than elsewhere",
      notable: "Tomato aspic with shrimp was featured on the menus of the best Southern hotel dining rooms through the 1970s, and Craig Claiborne of the New York Times discussed it as a defining dish of Southern fine dining.",
      history: "Shrimp suspended in tomato aspic represents the peak of mid-century American gelatin ambition. The technique required real skill: the aspic had to be chilled to exactly the right consistency before the shrimp were added so they suspended evenly rather than sinking or floating. The unmolding at the table was a social event in itself. In the South, where shrimp were abundant on the Gulf and Atlantic Coasts, this combination made particular sense. The dish persisted in Southern restaurants and women's club luncheons long after it disappeared from Northern tables.",
      type: "Salad",
      difficulty: 3,
      servings: 8,
      description: "Shrimp suspended in spiced tomato gelatin and unmolded at the table — a 1950s dinner party showpiece that seems baffling today.",
      ingredients: ["3 cups tomato juice", "2 envelopes gelatin", "1 tbsp lemon juice", "1 tsp Worcestershire", "Dash Tabasco", "1 tsp sugar", "1 lb cooked shrimp, peeled", "½ cup celery, minced"],
      instructions: ["Soften gelatin in ¼ cup cold tomato juice.", "Heat remaining juice; stir in softened gelatin until dissolved.", "Add lemon juice, Worcestershire, Tabasco, and sugar.", "Chill until syrupy. Fold in shrimp and celery.", "Pour into a large ring mold. Chill until firm.", "Unmold on a platter. Serve with mayonnaise."]
    },
    {
      name: "Scalloped Corn",
      region: "The Midwest and South, where corn remained a central dietary staple and corn casseroles of various kinds were standard church and family table fare",
      notable: "Scalloped corn appears in virtually every Midwestern community cookbook published between 1940 and 1980, making it one of the most widely documented regional casseroles in American culinary history.",
      history: "Scalloped corn occupies an interesting middle ground between a casserole and a corn pudding. The two-corn combination — creamed corn for moisture and flavor, whole kernel for texture — bound with egg and milk into a custard and topped with crackers for crunch, was a distinctly American formula with no European precedent. It was practical Midwestern cooking: corn was the most abundant crop, canned corn was one of the cheapest pantry staples, and the dish required no special skill. Its disappearance from mainstream cooking is more a matter of fashion than flavor — it is genuinely delicious.",
      type: "Side",
      difficulty: 1,
      servings: 6,
      description: "Canned creamed corn and whole kernel corn baked in a custardy egg mixture with crackers on top — a mid-century casserole side that has all but disappeared.",
      ingredients: ["1 can (15 oz) creamed corn", "1 can (15 oz) whole kernel corn, drained", "2 eggs, beaten", "½ cup milk", "1 small onion, grated", "1 cup crushed crackers", "2 tbsp butter", "Salt and pepper"],
      instructions: ["Preheat oven to 350°F. Butter a 1½-quart baking dish.", "Mix both corns, eggs, milk, and onion. Season.", "Stir in half the crackers.", "Pour into baking dish.", "Toss remaining crackers with melted butter. Spread on top.", "Bake 40-45 minutes until set and golden."]
    },
    {
      name: "Grilled Cheese and Tomato Soup",
      region: "Nationwide; this pairing became the definitive American lunch in the 1950s — served in school cafeterias, diners, and home kitchens from coast to coast",
      notable: "The grilled cheese and tomato soup combination was so culturally embedded that it appeared in virtually every American school cafeteria from the 1950s onward. Campbell's promoted the pairing aggressively in their advertising, and it became one of the most universally shared American food memories.",
      history: "Grilled cheese sandwiches became widespread after Kraft introduced processed American cheese slices in the 1950s — the perfectly melting, consistent cheese made the sandwich reproducible at scale. Campbell's tomato soup and the grilled cheese sandwich were promoted together in advertising campaigns that cemented their pairing in the American consciousness. The combination became the standard Friday lunch in Catholic school cafeterias (no meat), the sick-day meal, and the after-school snack of an entire generation.",
      type: "Luncheonette",
      difficulty: 1,
      servings: 1,
      description: "The quintessential American lunch pairing — a perfectly golden grilled cheese sandwich alongside a bowl of hot tomato soup. Simple enough to make in ten minutes, impossible to improve.",
      ingredients: ["2 slices white sandwich bread", "2 tbsp butter, softened", "2 slices American cheese (Kraft Singles for authenticity)", "1 can Campbell's condensed tomato soup", "1 can whole milk"],
      instructions: ["Butter the outside faces of both bread slices generously.", "Place cheese between slices, buttered sides out.", "Heat a cast iron skillet or griddle over medium-low heat.", "Cook sandwich 3-4 minutes until deep golden. Flip. Cook another 2-3 minutes.", "For soup: combine condensed tomato soup with one can of whole milk.", "Heat over medium, stirring. Do not boil.", "Cut sandwich diagonally.", "Serve immediately with the soup alongside for dipping.", "The soup is for dipping. This is non-negotiable."]
    },
    {
      name: "Celery Hearts with Olives",
      region: "Nationwide; celery hearts as a table relish or cold plate accompaniment were standard at lunch counters and hotel dining rooms from the 1920s through the 1960s",
      notable: "The Lunken Airport cold plate menu included 'Celery Hearts, Sliced Egg' as a standalone 35-cent plate — a reminder that a single stalk of properly trimmed celery heart was once considered a legitimate meal component.",
      history: "Before the vegetable crudité platter became fashionable in the 1970s, celery hearts were a standalone table item at American restaurants. They were placed on the table before the meal at better establishments, served as part of cold plates at lunch counters, and offered as a relish alongside heavier dishes. The celery heart — the pale, tender inner stalks — was considered a delicacy compared to the tougher outer stalks. Paired with olives (pimento-stuffed green olives were standard), it was a light starter or accompaniment. The practice of serving celery as a serious food item rather than a garnish has almost entirely disappeared.",
      type: "Luncheonette",
      difficulty: 1,
      servings: 4,
      description: "Crisp pale celery hearts, trimmed and chilled, served alongside green olives stuffed with pimento — the forgotten American table relish that appeared at every proper lunch counter.",
      ingredients: ["1 head celery, pale inner hearts only", "Ice water", "1 jar pimento-stuffed green olives", "Optional: radishes, carrot sticks"],
      instructions: ["Trim outer celery stalks. Reserve only the pale, tender inner heart.", "Cut celery hearts into 4-inch lengths.", "Soak in ice water for 30 minutes — this crisps and curls them slightly.", "Drain and pat dry.", "Arrange on a small plate alongside drained olives.", "Serve chilled as a table relish or cold plate accompaniment.", "This is the entire recipe. Celery and olives were once enough."]
    },
  ],

  "1960s": [
    {
      name: "Garlicked Olives",
      region: "Nationwide; a hostess shortcut of the 1950s, when specialty marinated olives were unavailable outside major cities",
      notable: "Jean Anderson writes that in the 1950s, before a dozen varieties of brined, herbed, or spiced olives could be had at the nearest specialty food shop, hostesses would take the curse off the canned variety by marinating them with garlic, hot peppers, and herbs. She adds simply: 'I still think these are good.'",
      history: "Garlicked olives represent one of the cleverest transformations in mid-century American entertaining — taking the most ordinary canned ingredient and, with a week's patience, turning it into something that tasted genuinely exotic. Before the specialty food explosion of the 1980s and 90s, a jar of marinated olives was a novelty that impressed guests. The technique — simmering the olive brine with garlic, dried chili peppers, and peppercorns, adding vinegar, and letting the whole thing steep for a week — was widely shared through community cookbooks and women's magazines. The result is dramatically better than either the plain canned olives or most modern marinated versions.",
      type: "Appetizer",
      difficulty: 1,
      servings: 16,
      description: "Canned olives transformed by a week in a garlic, chili, and thyme marinade — the 1950s hostess trick for making ordinary olives taste extraordinary before specialty food shops existed.",
      ingredients: [
        "2 (8- to 9-ounce) jars or cans unpitted green or ripe olives with their liquid",
        "4 large cloves garlic, peeled and slivered",
        "6 small dried chili peppers (chili piquins or similar)",
        "6 black peppercorns",
        "¼ cup red wine vinegar",
        "4 sprigs fresh thyme or oregano, washed well and patted dry"
      ],
      instructions: [
        "Drain olive liquid into a small saucepan.",
        "Add garlic, chilies, and peppercorns. Cover and simmer 5 minutes.",
        "Add vinegar.",
        "Place olives in a 1-pint preserving jar and tuck in thyme sprigs.",
        "Pour in saucepan mixture.",
        "Cover tight and marinate at least a week in the refrigerator before serving, inverting jar from time to time.",
        "These improve the longer they sit — two weeks is better than one."
      ]
    },
    {
      name: "Beef Fondue (Bourguignonne)",
      region: "Nationwide; the fondue craze swept American entertaining in the mid-1960s following its introduction at the 1964 New York World's Fair",
      notable: "The New York World's Fair of 1964-65 featured a Swiss Pavilion where beef fondue was served to thousands of American visitors daily, launching the fondue craze that would dominate dinner party culture for the next decade.",
      history: "Beef fondue Bourguignonne — despite the name, it has no connection to Burgundy; it was named by a Swiss restaurateur who wanted it to sound French — arrived in American consciousness almost entirely through the 1964 World's Fair. By 1966, every wedding registry in America included a fondue set, and the format became the defining dinner party activity of the decade. The social theater of the fondue set was as important as the food itself. The 1970s cheese fondue craze eventually replaced it, and the beef version retreated to retro novelty status.",
      type: "Main",
      difficulty: 2,
      servings: 4,
      description: "Cubed beef tenderloin cooked at the table in hot oil — the 1960s dinner party ritual that required the right fondue set and a crowd willing to wait.",
      ingredients: ["2 lbs beef tenderloin, cubed 1-inch", "Vegetable oil for frying", "Béarnaise sauce", "Horseradish cream", "Mustard", "Soy-ginger dipping sauce"],
      instructions: ["Cut beef into uniform 1-inch cubes. Pat very dry.", "Fill fondue pot ⅔ with oil. Heat to 375°F on the stove.", "Transfer carefully to the fondue stand with the burner.", "Guests spear beef with long fondue forks and cook in hot oil 30-60 seconds.", "Serve with an array of dipping sauces.", "Important: use fondue forks only for cooking; switch to regular forks for eating."]
    },
    {
      name: "Sausage-Cheese Cocktail Balls",
      region: "Nationwide; a 1960s party staple spread through women's magazines and Pillsbury recipe promotions",
      notable: "These contain only three ingredients — Bisquick, pork sausage, and sharp Cheddar cheese. In the 1960s no party would have been complete without them. The variation uses pancake mix as the foundation, halves the amount of sausage, and rounds out the flavor with dry onion soup mix and cayenne.",
      history: "Sausage-Cheese Cocktail Balls were the quintessential 1960s American party food — three ingredients, no skill required, made by the hundreds in advance and served warm. The Bisquick version spread through Pillsbury and General Mills promotional recipes and appeared in virtually every community cookbook published in the 1960s and 70s. They were the food that greeted guests at every cocktail party, holiday gathering, and church social for a generation. Their simplicity and crowd-pleasing quality have kept them alive in the South and Midwest long after they disappeared from fashionable entertaining.",
      type: "Appetizer",
      difficulty: 1,
      servings: 30,
      description: "Three ingredients — bulk sausage, sharp Cheddar, and Bisquick — rolled into balls and baked until golden. In the 1960s no party was complete without them.",
      ingredients: [
        "1 lb bulk pork sausage",
        "½ lb sharp Cheddar cheese, finely grated",
        "3 cups all-purpose baking mix (Bisquick)"
      ],
      instructions: [
        "Preheat oven to 375°F. Lightly coat two baking sheets with cooking spray.",
        "Combine all ingredients in a large bowl and mix thoroughly with your hands until a smooth dough forms.",
        "Pinch off bits of dough and roll into 1-inch balls.",
        "Place on greased baking sheets, spacing 1½ inches apart, and sprinkle with paprika.",
        "Bake 10 to 15 minutes, turning the balls over at halftime, until deep golden brown.",
        "Remove from baking sheets and serve warm."
      ]
    },
    {
      name: "Chicken Kiev",
      region: "Named for the Ukrainian capital; became known in America through Russian and Ukrainian émigré restaurants in New York, particularly in the 1950s and 60s",
      notable: "Chicken Kiev was the signature dish at the Russian Tea Room in New York City, which served it from its 1926 opening through its various iterations. The dish became synonymous with the restaurant's combination of theatrical Soviet glamour and American luxury.",
      history: "Chicken Kiev's American career is a story of Cold War glamour. The dish — a Ukrainian preparation that Russian restaurants claimed as their own — became the go-to luxury item at upscale American restaurants during the Cold War, when anything Soviet-adjacent carried an exotic charge. The technical challenge of the dish — the butter must be sealed inside without leaking during frying — gave it a prestige that simpler dishes lacked, and the theatrical butter-spurting at the table was a feature, not a bug. Airlines served it as a first-class meal through the 1970s and 80s.",
      type: "Main",
      difficulty: 4,
      servings: 4,
      description: "Chicken breast wrapped around a cylinder of herbed butter, breaded, and deep-fried so that the butter spurts out when cut — the restaurant showpiece of the 1960s.",
      ingredients: ["4 boneless chicken breasts, pounded thin", "8 tbsp cold unsalted butter", "2 tbsp fresh parsley, minced", "2 cloves garlic, minced", "Salt, pepper", "Flour, beaten egg, breadcrumbs for breading", "Oil for deep frying"],
      instructions: ["Mix butter with parsley and garlic. Season. Roll into a log in plastic wrap. Freeze until very firm.", "Season chicken. Place a cold butter cylinder at the edge of each breast.", "Roll tightly, tucking in sides. Secure with toothpicks if needed.", "Dredge in flour, dip in egg, coat in breadcrumbs.", "Fry in 350°F oil 15-18 minutes until deep golden and cooked through.", "Rest 3 minutes before serving — beware the butter spurt."]
    },
    {
      name: "Grasshopper Pie",
      region: "Nationwide; the Grasshopper cocktail originated at Tujague's bar in New Orleans around 1910, and the pie version spread through the country in the 1950s and 60s",
      notable: "The Grasshopper cocktail — crème de menthe, crème de cacao, and cream — was invented by Philip Guichet at Tujague's Restaurant in New Orleans. The pie adaptation made the cocktail into a dessert.",
      history: "Grasshopper Pie is one of the most distinctive products of the cocktail culture of 1960s entertaining. The fashion for serving alcohol-spiked desserts at dinner parties was a reflection of the decade's sophistication-signaling food culture. The vivid green color, produced by crème de menthe, made the pie visually arresting — it was the kind of dessert that drew comments from guests. The Oreo crust added a chocolate bitterness that balanced the sweet liqueur filling. The pie's decline came as dessert fashions moved toward chocolate-forward and then toward less sweet preparations.",
      type: "Dessert",
      difficulty: 3,
      servings: 8,
      description: "A no-bake Oreo crust filled with a mousse of crème de menthe and crème de cacao — aggressively green, aggressively minty, and absolutely of its era.",
      ingredients: ["24 Oreo cookies, crushed", "5 tbsp butter, melted", "24 large marshmallows", "½ cup whole milk", "¼ cup crème de menthe", "¼ cup white crème de cacao", "2 cups heavy cream, whipped", "Green food coloring (optional)"],
      instructions: ["Mix cookie crumbs and melted butter. Press into a 9-inch pie plate. Chill.", "Melt marshmallows with milk in a double boiler. Cool to room temp.", "Stir in crème de menthe and crème de cacao.", "Fold in whipped cream.", "Pour into crust. Freeze until firm, at least 4 hours.", "Garnish with chocolate shavings. Slice frozen."]
    },
    {
      name: "Lobster Thermidor",
      region: "Fine dining restaurants nationwide; originally created in Paris at Chez Marie restaurant in 1894 and introduced to American restaurants in the early 1900s",
      notable: "Lobster Thermidor was named for the play Thermidor by Victorien Sardou, which opened the night the dish was created at Chez Marie. Napoleon's revolutionary calendar name for late July named both the play and the dish.",
      history: "Lobster Thermidor has one of the most documented origin stories in culinary history — created on January 24, 1894, at a Paris restaurant to celebrate the opening of Sardou's play. The dish traveled to American fine dining rooms in the early 1900s and remained the benchmark of extravagance through the 1960s, when ordering it signaled you were celebrating something or that money was no object. Julia Child helped introduce the home version to American cooks. Its decline is partly economic — good lobster is expensive — and partly fashion, as the elaborate filled-and-broiled-shell presentation came to seem overwrought.",
      type: "Main",
      difficulty: 5,
      servings: 2,
      description: "Lobster meat in a brandy and Dijon cream sauce, stuffed back into the shell and broiled — the apex of 1960s fine dining, now rarely ordered.",
      ingredients: ["2 lobsters (1½ lbs each), split", "3 tbsp butter", "2 tbsp brandy", "1 tbsp dry mustard", "1 cup heavy cream", "2 egg yolks", "¼ cup grated Gruyère", "Salt, cayenne"],
      instructions: ["Broil split lobsters 8-10 minutes. Remove meat; keep shells.", "Sauté lobster chunks in butter 2 minutes. Flambe with brandy.", "Add cream and mustard; simmer to reduce by a third.", "Temper egg yolks into sauce; stir until slightly thick.", "Season with salt and cayenne. Fill shells with mixture.", "Top with Gruyère. Broil until golden. Serve immediately."]
    },
    {
      name: "Quiche Lorraine (Original)",
      region: "Lorraine, northeastern France; introduced to American fine dining through French restaurant culture and popularized by Julia Child's television appearances",
      notable: "Julia Child introduced quiche Lorraine to American television audiences in the early 1960s and is largely credited with making it a household concept. The 1982 book Real Men Don't Eat Quiche inadvertently cemented its cultural status.",
      history: "Quiche Lorraine arrived in America at exactly the right cultural moment. Julia Child's The French Chef debuted on PBS in 1963, and her warm, accessible approach to French cooking made dishes like quiche seem achievable rather than intimidating. The original Lorraine — from northeastern France, where it is a centuries-old dish — contained nothing but bacon and custard in a butter pastry; cheese was not traditional. American versions quickly added Gruyère and then everything else imaginable.",
      type: "Main",
      difficulty: 3,
      servings: 6,
      description: "The original French quiche arrived in American kitchens in the 1960s — bacon and custard in a butter pastry shell, nothing else. It was exotic and sophisticated.",
      ingredients: ["1 fully baked 9-inch pastry shell", "6 strips bacon, cooked and crumbled", "4 eggs", "1½ cups heavy cream", "½ cup whole milk", "Salt, white pepper", "Pinch nutmeg"],
      instructions: ["Preheat oven to 325°F.", "Scatter bacon in the baked pastry shell.", "Whisk eggs, cream, milk, salt, pepper, and nutmeg until smooth.", "Strain custard through a fine sieve.", "Pour over bacon.", "Bake 35-40 minutes until just set — it should wobble slightly in the center.", "Rest 15 minutes before slicing."]
    },
    {
      name: "Shrimp Cocktail (Classic)",
      region: "Nationwide; the shrimp cocktail became the standard American restaurant appetizer from the 1950s through the 1980s, found on every steakhouse and hotel menu",
      notable: "Food critics routinely used the shrimp cocktail as a benchmark — a restaurant that kept its shrimp properly cold and its cocktail sauce properly sharp was assumed to care about its food.",
      history: "The shrimp cocktail as a formal appetizer is an American invention of the early 20th century, evolving from the oyster cocktail of the 1890s. What made it ubiquitous after World War II was the development of commercial shrimp freezing technology, which made large, uniform shrimp available year-round at consistent prices. The specific presentation — shrimp hung over the rim of a glass, cocktail sauce in the center — became standardized in the 1950s and remained essentially unchanged for thirty years. Its decline as a restaurant staple came with the rise of more elaborate appetizer cultures in the 1990s, though it has never fully disappeared.",
      type: "Appetizer",
      difficulty: 1,
      servings: 6,
      description: "Chilled jumbo shrimp hung over the rim of a glass with cocktail sauce — the 1960s restaurant's obligatory opener, now a relic of the continental dining room.",
      ingredients: ["24 jumbo shrimp, peeled with tails on", "½ cup ketchup", "2 tbsp fresh horseradish", "1 tbsp lemon juice", "Dash Worcestershire", "Dash Tabasco", "Salt", "Lemon wedges"],
      instructions: ["Poach shrimp in seasoned water (bay leaf, peppercorns, lemon) until just pink, 2-3 minutes.", "Transfer immediately to ice water to stop cooking.", "Mix ketchup, horseradish, lemon juice, Worcestershire, and Tabasco. Season.", "Hang shrimp around the rim of a cocktail glass filled with ice.", "Serve sauce in the center glass. Garnish with lemon."]
    },
    {
      name: "Waldorf Astoria Red Velvet Cake",
      region: "New York City, where it was served at the Waldorf Astoria Hotel; subsequently spread throughout the South, where it became a regional institution",
      notable: "A popular legend holds that the Waldorf Astoria charged a guest $100 for the recipe and she published it in revenge. The story is almost certainly false, but it circulated so widely that it became permanently attached to the recipe.",
      history: "Red velvet cake's American career has two distinct chapters. The original version, associated with the Waldorf Astoria and Adams Extract Company (which promoted their red food coloring), was a restaurant and bakery specialty in the Northeast. The cake migrated to the South through marketing campaigns, where it became embedded in the baking tradition. The contemporary cream cheese frosting is a 1970s addition; the original boiled flour icing (called ermine or roux frosting) is far silkier and less sweet, and remains the traditional Southern form.",
      type: "Dessert",
      difficulty: 3,
      servings: 12,
      description: "The original red velvet cake — deep mahogany from cocoa and a chemical reaction with buttermilk, frosted with old-fashioned boiled flour icing (not cream cheese).",
      ingredients: ["2½ cups cake flour", "1 tsp baking soda", "2 tbsp unsweetened cocoa powder", "1 tsp salt", "½ cup butter, softened", "1½ cups sugar", "2 eggs", "1 cup buttermilk", "1 tbsp red food coloring", "1 tsp vanilla", "1 tbsp cider vinegar", "ICING: 1 cup milk", "5 tbsp flour", "1 cup butter", "1 cup sugar", "1 tsp vanilla"],
      instructions: ["Cream butter and sugar. Beat in eggs, food coloring, vanilla.", "Alternate adding flour-soda-salt mixture with buttermilk. Stir in vinegar last.", "Bake in 2 round pans at 350°F for 25-30 minutes.", "ICING: Cook milk and flour together until thick paste. Cool. Beat butter and sugar until fluffy; beat in cooled paste and vanilla until light and silky.", "Fill and frost cooled layers."]
    },
    {
      name: "Boeuf Bourguignon",
      region: "Burgundy, France; brought to American home kitchens almost entirely through Julia Child's 1961 cookbook and her subsequent television program",
      notable: "Julia Child opened Mastering the Art of French Cooking with Boeuf Bourguignon, and the dish became the most famous recipe in the book. The film Julie and Julia (2009) revived it for a new generation.",
      history: "Boeuf Bourguignon's American story is almost entirely the story of Julia Child. The dish existed in French home cooking for centuries, but Child's careful, step-by-step adaptation made it accessible and desirable in the United States. The 1961 publication of Mastering the Art of French Cooking transformed American cooking culture, and Boeuf Bourguignon was its anchor recipe — a three-hour project that taught every fundamental technique in French braising. Making it became a rite of passage for serious home cooks in the 1960s and 70s.",
      type: "Main",
      difficulty: 4,
      servings: 6,
      description: "After Julia Child's 1961 Mastering the Art of French Cooking, this became America's aspirational dinner party dish — beef braised in Burgundy wine with mushrooms and pearl onions.",
      ingredients: ["3 lbs beef chuck, cubed", "1 bottle Burgundy wine", "4 strips thick-cut bacon", "1 lb pearl onions, peeled", "1 lb button mushrooms", "3 cloves garlic", "1 tbsp tomato paste", "Bouquet garni", "3 tbsp flour", "Salt, pepper"],
      instructions: ["Marinate beef in wine overnight.", "Brown bacon in a Dutch oven; remove. Brown beef in batches in bacon fat.", "Cook onions and garlic briefly. Stir in flour and tomato paste.", "Return beef and bacon. Add wine from marinade and bouquet garni. Add water to cover.", "Braise at 325°F for 2½-3 hours.", "In last 30 minutes, sauté mushrooms separately in butter and add to pot.", "Adjust sauce consistency and season."]
    },
    {
      name: "Vichyssoise",
      region: "Created at the Ritz-Carlton Hotel in New York City in 1917 by chef Louis Diat, who named it after the French spa town of Vichy near his childhood home",
      notable: "Louis Diat invented Vichyssoise in 1917, modeled on a hot leek and potato soup his mother made, chilled and enriched with cream. He named it after Vichy, France — which later created an unfortunate association with the wartime Vichy regime.",
      history: "Vichyssoise is one of the few famous dishes with a fully documented American creation story. Louis Diat, the French-born chef of the Ritz-Carlton in New York, created it in the summer of 1917 during a heat wave. The dish traveled to American home kitchens through food magazines in the 1950s and reached its social peak in the 1960s, when serving cold soup at a dinner party was considered the height of sophistication.",
      type: "Soup",
      difficulty: 3,
      servings: 6,
      description: "Cold cream of potato and leek soup — an American invention by Louis Diat at the Ritz-Carlton (though inspired by French cooking), it became a 1960s sophistication signal.",
      ingredients: ["4 large leeks, white parts only, sliced", "4 large potatoes, peeled and cubed", "4 tbsp butter", "4 cups chicken broth", "1 cup heavy cream", "Salt, white pepper", "Chives for garnish"],
      instructions: ["Sauté leeks in butter over low heat until very soft, about 15 minutes — do not brown.", "Add potatoes and broth. Simmer 25 minutes until potatoes are tender.", "Puree until completely smooth. Push through a fine sieve.", "Stir in cream. Season with salt and white pepper.", "Chill thoroughly for at least 4 hours.", "Serve cold in chilled bowls. Garnish with snipped chives."]
    },
    {
      name: "Beef Wellington (Amateur Version)",
      region: "Named for the Duke of Wellington, though the dish's actual origin is contested; it became a fixture of American fine dining and ambitious home entertaining in the 1960s",
      notable: "The Duke of Wellington himself may or may not have eaten this dish — food historians have found no Victorian documentation of it. Despite the contested origin, Beef Wellington became Gordon Ramsay's signature dish.",
      history: "Beef Wellington arrived in American consciousness in the 1960s as the ultimate dinner party showpiece. The combination of expensive tenderloin, labor-intensive duxelles, and the technical challenge of wrapping it all in puff pastry was precisely the kind of culinary performance that serious 1960s home cooks aspired to. James Beard featured it in his cookbooks; women's magazines published detailed step-by-step guides. The dish required planning, skill, and nerve. For a generation of Americans who saw cooking as a form of self-expression, this was the ultimate test.",
      type: "Main",
      difficulty: 5,
      servings: 6,
      description: "A whole beef tenderloin coated in duxelles and pâté, wrapped in puff pastry and baked — the ambitious home cook's 1960s showstopper.",
      ingredients: ["2 lb beef tenderloin, trimmed", "1 lb mushrooms, finely minced", "4 oz pâté or liverwurst", "1 lb frozen puff pastry, thawed", "2 tbsp butter", "1 tbsp shallot, minced", "Salt and pepper", "1 egg, beaten"],
      instructions: ["Sear seasoned tenderloin on all sides in hot oil until deep brown. Cool.", "Cook mushrooms with shallot in butter until all moisture evaporates (duxelles). Cool.", "Spread pâté over tenderloin. Pack duxelles around it.", "Roll out pastry; wrap tenderloin tightly. Seal seams with egg wash.", "Brush exterior with egg wash. Score lightly.", "Bake at 425°F for 25-30 minutes until pastry is golden and beef reads 125°F for medium-rare.", "Rest 10 minutes before slicing."]
    },
    {
      name: "Gelatin Ribbon Cake",
      region: "Nationwide; General Foods' promotional material specifically featured rainbow Jell-O molds as party centerpieces in their 1950s and 60s advertising campaigns",
      notable: "The rainbow Jell-O mold appeared on the cover of General Foods' Jell-O promotional cookbook in 1963, which was distributed to millions of American households and is still found in used bookstores.",
      history: "The layered Jell-O mold was the most technically demanding entry in the mid-century gelatin repertoire, requiring multiple chilling cycles and precise timing to prevent layers from bleeding into each other. The effort was rewarded with a dessert that was genuinely visually spectacular when sliced — the stacked bands of translucent color were unlike anything else on the American dessert table. Its decline came with the broader rejection of gelatin cooking in the 1970s and 80s.",
      type: "Dessert",
      difficulty: 3,
      servings: 12,
      description: "Layers of different colored Jell-O set in a clear mold — when sliced, it shows rainbow striations. A genuine 1960s centerpiece dessert.",
      ingredients: ["4 packages (3 oz) Jell-O in 4 different colors", "4 cups boiling water (1 cup per package)", "4 cups cold water, divided", "2 cups sour cream, divided"],
      instructions: ["Dissolve first Jell-O package in 1 cup boiling water. Add ¾ cup cold water. Pour ¾ cup plain into a pan. Chill until firm.", "Mix remaining ¾ cup of that Jell-O with ½ cup sour cream. Pour over firm layer. Chill.", "Repeat process with each subsequent color.", "Continue building layers, alternating clear and creamy.", "After all 8 layers are set, unmold and slice to reveal the ribbons."]
    },
    {
      name: "Rumaki",
      region: "Created by Victor Bergeron (Trader Vic) for his tiki restaurant chain, originating in Oakland, California in the late 1950s; spread nationally with the tiki bar craze",
      notable: "Trader Vic Bergeron invented Rumaki for his tiki restaurant chain in the 1950s. Despite containing no ingredient from Hawaii or Polynesia, it became the canonical tiki food, appearing at every Trader Vic's from Oakland to London.",
      history: "Rumaki is a pure invention of the American tiki culture — it has no authentic Polynesian or Pacific origin, despite appearing on every tiki menu in the country. Trader Vic created it as a cocktail nibble that would seem exotic enough to fit the tiki bar aesthetic: the soy-ginger marinade nodded toward Asia, the water chestnut provided an unfamiliar crunchy element, and the bacon-wrapped chicken liver was a fashionable technique in its own right. When tiki culture faded in the 1970s, Rumaki went with it, making it one of the most culturally specific dishes in this entire collection.",
      type: "Appetizer",
      difficulty: 2,
      servings: 6,
      description: "Chicken livers and water chestnuts wrapped in bacon, marinated in soy and ginger, and broiled — the exotic Pacific Rim appetizer of every 1960s cocktail party.",
      ingredients: ["½ lb chicken livers, halved", "1 can water chestnuts, drained", "8 strips thin-cut bacon, halved", "¼ cup soy sauce", "2 tbsp brown sugar", "1 tsp fresh ginger, grated", "Toothpicks"],
      instructions: ["Marinate chicken livers in soy sauce, brown sugar, and ginger for 30 minutes.", "Place a water chestnut on each piece of liver.", "Wrap with a half-strip of bacon. Secure with a toothpick.", "Broil 4-5 minutes per side until bacon is crisp and liver is just cooked.", "Serve immediately."]
    },
    {
      name: "Impossible Green Chili-Cheese Pie",
      region: "Nationwide; developed in the Betty Crocker test kitchens as a way to use Bisquick Original baking mix",
      notable: "The 'Impossible Pie' format was one of Betty Crocker's most successful recipe concepts — Bisquick mixed with eggs and milk forms its own crust as it bakes, eliminating the need for pastry. The green chili version quickly became one of the company's most popular recipes and is used here courtesy of the Betty Crocker Kitchens.",
      history: "The Impossible Pie was a Betty Crocker test kitchen invention that solved a genuine problem: how to make a quiche-like dish without making pastry. The answer was Bisquick — when mixed with eggs and milk and poured over a filling, it settles to the bottom during baking and forms a soft, barely-there crust. The green chili and sharp Cheddar version became the most popular of the Impossible Pie family, appearing on the Bisquick box and in Betty Crocker promotional materials throughout the 1970s and 80s. It spread through community cookbooks across the Southwest and Midwest and became a Sunset magazine staple. Cut into wedges and then bite-size pieces, it doubles as cocktail finger food.",
      type: "Appetizer",
      difficulty: 1,
      servings: 8,
      description: "Green chilies and sharp Cheddar baked in a self-forming Bisquick crust — Betty Crocker's ingenious Impossible Pie that requires no pastry-making whatsoever.",
      ingredients: [
        "2 (4-ounce) cans chopped green chilies, well drained",
        "4 cups coarsely shredded sharp Cheddar cheese (about 1 lb)",
        "2 cups milk",
        "4 eggs",
        "1 cup biscuit mix (Bisquick)"
      ],
      instructions: [
        "Preheat oven to 425°F. Grease a 10½-inch pie plate.",
        "Sprinkle chilies and cheese evenly over bottom of prepared pie plate and set aside.",
        "Blend milk, eggs, and biscuit mix in electric blender at high speed until smooth — about 15 seconds. Or beat in large electric mixer bowl at high speed 1 minute.",
        "Pour into pie plate.",
        "Bake uncovered until a knife inserted in center comes out clean — 25 to 30 minutes.",
        "Cool on wire rack 10 minutes, cut into wedges, and serve.",
        "Note: if you divide the wedges into bite-size pieces, these make excellent cocktail finger food."
      ]
    },
    {
      name: "Clam Dip",
      region: "Nationwide; Breakstone's cream cheese company is widely credited with popularizing clam dip through promotional recipes in the 1950s",
      notable: "Breakstone's Cream Cheese published clam dip recipes in mass-circulation women's magazines beginning in the early 1950s, and the dish quickly became synonymous with the American cocktail party.",
      history: "Clam dip was a product of the mid-century American cocktail party culture and the promotional recipe marketing that drove it. Cream cheese companies, canned clam producers, and potato chip manufacturers all had incentives to promote the combination, and their advertising budgets made it ubiquitous in women's magazines by the mid-1950s. The cocktail party as a social form declined significantly in the 1970s and 80s as entertaining styles changed, and clam dip declined with it.",
      type: "Appetizer",
      difficulty: 1,
      servings: 8,
      description: "Canned clams mixed into cream cheese with a touch of Worcestershire and lemon — served with potato chips. The aperitivo staple of every 1960s living room.",
      ingredients: ["2 cans (6.5 oz) minced clams, drained (reserve 2 tbsp juice)", "8 oz cream cheese, softened", "1 tbsp Worcestershire sauce", "1 tsp lemon juice", "1 clove garlic, minced", "Salt, pepper", "Potato chips for serving"],
      instructions: ["Beat cream cheese until very smooth.", "Stir in drained clams, Worcestershire, lemon juice, garlic, and reserved clam juice.", "Season with salt and pepper.", "Refrigerate at least 1 hour for flavors to meld.", "Serve in a bowl surrounded by potato chips."]
    },
    {
      name: "Curry Dip",
      region: "Raleigh, North Carolina; Jean Anderson's mother's recipe, a particular favorite of the Anderson family",
      notable: "Jean Anderson writes that this is 'not only because it was my mother's invention but also because it's been a huge hit whenever she or I served it.' Like California Dip, it begins with an envelope of Lipton Recipe Secrets Onion Soup Mix — the base of half the party dips in 1960s America.",
      history: "Curry dip belongs to the great tradition of American hostess shortcuts — taking a packet of onion soup mix and turning it into something that tastes far more sophisticated than its origins suggest. The combination of dry onion soup mix with cream cheese, curry powder, chutney, and sour cream produces something genuinely complex. It appeared at dinner parties and cocktail gatherings across the South and Midwest from the 1960s onward, served with the standard array of chips and raw vegetables. Its home origin — a personal recipe rather than a test kitchen creation — gives it a different character from the corporate dips that surrounded it.",
      type: "Appetizer",
      difficulty: 1,
      servings: 8,
      description: "Cream cheese and sour cream seasoned with curry powder, onion soup mix, and chutney — a 1960s party dip that tastes more sophisticated than its pantry origins suggest.",
      ingredients: [
        "1 envelope dry onion soup mix",
        "1 (8-ounce) package cream cheese, at room temperature",
        "2 tbsp curry powder",
        "¼ cup chopped chutney",
        "1½ cups sour cream"
      ],
      instructions: [
        "Using a fork, blend all ingredients well in a small bowl.",
        "Cover and refrigerate several hours.",
        "Before serving, let stand at room temperature 30 to 45 minutes.",
        "If too thick, thin with a little milk.",
        "Mound in small serving bowl and surround with potato or corn chips, crackers, cherry tomatoes, or bite-size chunks of carrot, celery, zucchini, broccoli, and cauliflower."
      ]
    },
    {
      name: "Clam Dip (Anderson Version)",
      region: "Nationwide; traced by Jean Anderson to at least 1939, possibly to Woodrow Wilson's White House via a recipe on file card by Mrs. Woodrow Wilson",
      notable: "Anderson traced the clam dip's origins back to 1939 and discovered that Woodrow Wilson's White House had a clam cream cheese recipe on file — written in Mrs. Wilson's hand — which would push the origins back to between 1915 and 1921. The original recipe reads simply: '1 Can Clams Small / 1 part Cream Cheese / drain off Juice / add onions grated / & Salt — pepper.'",
      history: "The clam dip has one of the most tangled origin stories of any American party food. Jean Anderson traced it to at least 1939, when Irma S. Rombauer published a practically identical recipe titled 'Clam Canapé' in her little-known Streamlined Cooking. A file card recipe by Mrs. Woodrow Wilson may push the origins back to the 1915-1921 White House. The dip entered the American mainstream in the early 1950s when it was featured on TV's Kraft Music Hall. By the mid-1950s it was the standard American cocktail party dip — simple, cheap, and requiring no cooking whatsoever. This version, adapted from Anderson's mother's recipe, adds garlic and lemon juice and reserves some of the clam juice for adjusting consistency.",
      type: "Appetizer",
      difficulty: 1,
      servings: 6,
      description: "The original American clam dip — cream cheese beaten with minced clams, lemon juice, Worcestershire, garlic, and reserved clam juice. Possibly served at Woodrow Wilson's White House.",
      ingredients: [
        "1 clove garlic, peeled and halved",
        "1 (8-ounce) package cream cheese, at room temperature",
        "2 tsp fresh lemon juice",
        "1½ tsp Worcestershire sauce",
        "½ tsp salt",
        "Pinch black pepper",
        "1 (7-ounce) can minced clams, drained, juice reserved"
      ],
      instructions: [
        "Rub a small bowl well with the garlic halves; discard garlic.",
        "Add cream cheese to bowl and cream until smooth.",
        "Mix in lemon juice, Worcestershire sauce, salt, and pepper.",
        "Stir in clams and, one by one, 4 tablespoons of the reserved clam juice.",
        "For a looser dip, add a little more clam juice.",
        "Mound in small serving bowl and surround with potato chips, crackers, or bite-size chunks of carrot, celery, zucchini, broccoli, and cauliflower."
      ]
    },
    {
      name: "Gazpacho (Newly Fashionable)",
      region: "Andalusia, Spain; introduced to American dining through the Spanish immigrant community and through the broader 1960s interest in European cuisine beyond France and Italy",
      notable: "Craig Claiborne championed gazpacho in the New York Times in the early 1960s, introducing it to American readers and effectively launching its fashionable American career.",
      history: "Gazpacho is ancient — the basic formula of bread, vinegar, olive oil, and vegetables pounded together predates the tomato in Spain by centuries. The tomato version arrived in Andalusia from the Americas by the 17th century. American exposure came partly through Spanish immigration to New York and partly through the growing interest in international cooking that followed World War II. Craig Claiborne's 1962 New York Times piece is considered the moment of its American debut. Its adoption was swift — a no-cook cold soup was exactly what 1960s entertaining needed.",
      type: "Soup",
      difficulty: 1,
      servings: 6,
      description: "Cold blended Spanish tomato soup became chic in American kitchens in the 1960s — a no-cook summer soup that felt like global sophistication.",
      ingredients: ["2 lbs ripe tomatoes, roughly chopped", "1 cucumber, peeled and seeded", "1 red bell pepper, chopped", "2 cloves garlic", "3 tbsp red wine vinegar", "¼ cup olive oil", "Salt, pepper", "Diced vegetables for garnish"],
      instructions: ["Combine all vegetables in a blender with vinegar and oil.", "Blend until smooth. Season generously.", "Push through a sieve for a smoother texture if desired.", "Chill at least 2 hours, preferably overnight.", "Serve in chilled bowls with a drizzle of olive oil and diced cucumber, tomato, and pepper garnish."]
    },
    {
      name: "Chiffon Pie (Lemon)",
      region: "Nationwide; the chiffon technique was invented by Monroe Boston Strause, a Los Angeles pie baker, who published it in the 1920s and spread it nationally through women's magazine recipes",
      notable: "Monroe Boston Strause, who called himself The Pie King, invented the chiffon pie technique in the 1920s and published Pie Marches On in 1939. He is one of the largely forgotten innovators of American baking.",
      history: "Chiffon pie was a genuine American invention — Monroe Boston Strause of Los Angeles developed the technique of setting a light, whipped filling with gelatin and folding it into beaten egg whites in the 1920s, producing a pie filling lighter than cream pie but more stable than a mousse. The graham cracker crust, which became the standard vehicle for chiffon pies, was also an American innovation. The dish was at its peak in the 1950s and 60s when lighter desserts were in vogue, then crowded out by refrigerator cheesecakes and other cold no-bake pies.",
      type: "Dessert",
      difficulty: 3,
      servings: 8,
      description: "A cloudlike lemon mousse set in gelatin and folded into beaten egg whites, in a graham cracker crust — the lighter alternative to heavy cream pies, very 1960s.",
      ingredients: ["1 tbsp gelatin", "¼ cup cold water", "4 eggs, separated", "1 cup sugar, divided", "½ cup fresh lemon juice", "1 tbsp lemon zest", "Pinch salt", "1 prebaked 9-inch graham cracker crust"],
      instructions: ["Soften gelatin in cold water.", "Beat yolks with ½ cup sugar, lemon juice, and zest in a double boiler until thick. Stir in softened gelatin.", "Cool mixture until it mounds softly.", "Beat egg whites with salt to soft peaks; beat in remaining ½ cup sugar to stiff peaks.", "Fold whites into lemon mixture.", "Pile into crust. Chill 3-4 hours.", "Serve with barely sweetened whipped cream."]
    },
  ],

  "1970s": [
    {
      name: "Fondue (Cheese)",
      region: "Nationwide; Switzerland's national marketing campaign for fondue in the postwar era was enormously effective, and the dish spread through American entertaining culture in the late 1960s and 70s",
      notable: "The Swiss Cheese Union essentially invented the concept of fondue as Switzerland's national dish through an aggressive postwar marketing campaign. Before the 1950s, fondue was a regional Alpine peasant dish.",
      history: "Cheese fondue's American story is partly a triumph of marketing. The Swiss Cheese Union ran one of the most successful national food promotion campaigns in history, shipping fondue sets and cheese to every Winter Olympics and distributing recipes to American food writers. In America, fondue sets became standard wedding gifts in the late 1960s, and the communal dining format appealed to the era's social openness. The tradition that anyone who dropped their bread into the pot had to buy the next round added a game element that made it popular party entertainment.",
      type: "Main",
      difficulty: 2,
      servings: 4,
      description: "Swiss Gruyère and Emmental melted with white wine and kirsch in a communal pot, eaten with bread cubes — the 1970s dinner party ritual that united couples.",
      ingredients: ["1 lb Gruyère, grated", "½ lb Emmental, grated", "1½ cups dry white wine", "1 clove garlic, halved", "2 tbsp kirsch", "1 tbsp cornstarch", "Pinch nutmeg", "Crusty bread, cubed"],
      instructions: ["Rub fondue pot with cut garlic. Pour in wine and bring to a gentle simmer.", "Toss cheeses with cornstarch.", "Add cheese to wine in handfuls, stirring in a figure-8 motion until melted.", "Stir in kirsch and nutmeg.", "Transfer to burner at the table.", "Guests spear bread cubes and swirl in the cheese. Anyone who drops their bread buys the next round."]
    },
    {
      name: "Quiche with Everything (1970s Style)",
      region: "Nationwide; the quiche craze of the 1970s produced endless variations in women's magazines and community cookbooks across the country",
      notable: "The 1982 book Real Men Don't Eat Quiche by Bruce Feirstein was a satirical critique of 1970s yuppie culture that specifically targeted the quiche as a symbol of soft, urban affectation. It sold over 1.6 million copies.",
      history: "After Julia Child introduced quiche to American television in the early 1960s, it took about a decade for it to penetrate home cooking culture thoroughly. By the mid-1970s it was everywhere: in women's magazines, in cooking classes, at potlucks, and at brunch. The original simplicity of the Lorraine gave way to the American impulse to improve through addition. Spinach quiche, mushroom quiche, crab quiche — every possible filling was tried and published. Bruce Feirstein's 1982 satire captured the moment when quiche had become overexposed and associated with anxious middle-class sophistication-signaling.",
      type: "Main",
      difficulty: 3,
      servings: 6,
      description: "After quiche hit the American mainstream, home cooks stuffed it with everything: spinach, mushroom, bacon, Swiss. Real men didn't eat it, apparently, but everyone else did.",
      ingredients: ["1 prebaked 9-inch pie shell", "6 strips bacon, cooked and crumbled", "1 cup fresh spinach, sautéed and squeezed dry", "1 cup mushrooms, sautéed", "1½ cups Swiss cheese, shredded", "3 eggs", "1½ cups half-and-half", "Salt, pepper, nutmeg"],
      instructions: ["Preheat oven to 325°F.", "Layer bacon, spinach, mushrooms, and cheese in pie shell.", "Whisk eggs and half-and-half. Season with salt, pepper, and nutmeg.", "Pour custard over fillings.", "Bake 40-45 minutes until just set.", "Rest 15 minutes before serving."]
    },
    {
      name: "Carob Brownies",
      region: "Nationwide, particularly in the natural food store and food co-op culture that flourished in college towns and cities from Berkeley to Cambridge",
      notable: "Carob was promoted in natural food circles throughout the 1970s as a caffeine-free, lower-fat alternative to chocolate. Rodale Press and other natural living publishers championed it in dozens of cookbooks.",
      history: "Carob brownies represent the most earnest and ultimately futile culinary project of the 1970s: replacing chocolate with carob. Carob is genuinely nutritious and has a pleasant flavor, but it is not chocolate, and no amount of honey or whole wheat flour can make a carob brownie taste like a chocolate one. The decade's natural food movement produced a genuine legacy in other areas, but carob's moment passed when the food counterculture recognized that denial wasn't the same as health, and good chocolate came back.",
      type: "Dessert",
      difficulty: 2,
      servings: 16,
      description: "The health food movement of the 1970s embraced carob as a 'natural' chocolate substitute. These brownies required honey, whole wheat flour, and ideally some self-delusion.",
      ingredients: ["½ cup carob powder", "½ cup whole wheat flour", "¼ cup butter or coconut oil", "½ cup honey", "2 eggs", "1 tsp vanilla", "Pinch salt", "½ cup walnuts, chopped"],
      instructions: ["Preheat oven to 350°F. Grease an 8-inch square pan.", "Melt butter and stir in honey. Cool slightly.", "Beat in eggs and vanilla.", "Stir in carob powder, flour, and salt until just combined.", "Fold in walnuts.", "Bake 25-30 minutes until just set.", "Cool before cutting — carob brownies firm as they cool."]
    },
    {
      name: "Crêpes Suzette (Home Version)",
      region: "Named for a young woman who accompanied the Prince of Wales at a Monte Carlo restaurant in 1895; the dish reached American homes through French restaurant culture of the 1950s and 60s",
      notable: "The origin of Crêpes Suzette is contested — Henri Charpentier claimed he accidentally created it for the Prince of Wales in 1895, though food historians dispute this. Regardless, the dish became one of the most famous tableside preparations in French restaurant history.",
      history: "Crêpes Suzette is ultimately a story about theater. The dish's central attraction was the flambé — the tableside ignition of warm brandy that produced a brief, dramatic flame. In French restaurants, this was performed by a skilled waiter with studied nonchalance; at home in the 1970s, it was performed by nervous hosts with variable results. The risks were manageable but real — eyebrows were lost, ceilings were singed. When tableside performance cooking fell from fashion in the 1980s, crêpes Suzette lost its essential context.",
      type: "Dessert",
      difficulty: 4,
      servings: 4,
      description: "Thin crêpes flambéed at the table in a buttery orange sauce laced with Grand Marnier — dinner theater in your dining room, peak 1970s sophistication.",
      ingredients: ["CRÊPES: 1 cup flour", "2 eggs", "1½ cups milk", "1 tbsp butter, melted", "Pinch salt", "SAUCE: 4 tbsp butter", "4 tbsp sugar", "Juice of 2 oranges", "Zest of 1 orange", "¼ cup Grand Marnier or Cointreau", "2 tbsp brandy for flambé"],
      instructions: ["Make crêpe batter; rest 30 min. Cook thin crêpes; fold into quarters.", "Make sauce: melt butter and sugar in a wide pan until caramelized. Add orange juice and zest.", "Add Grand Marnier. Add folded crêpes and baste with sauce.", "Add brandy, tilt pan, and ignite with a long match.", "Let flames die naturally.", "Serve two crêpes per person, spooned with sauce."]
    },
    {
      name: "Zucchini Bread",
      region: "Nationwide; the Victory Garden revival of the early 1970s, prompted by inflation concerns and back-to-land movements, produced exactly the same zucchini surplus problem that has always plagued home gardens",
      notable: "Zucchini bread became a cultural joke as well as a recipe in the 1970s — there were cartoons, magazine articles, and even a National Lampoon piece about the impossibility of getting rid of backyard zucchini.",
      history: "Zucchini bread is a 1970s creation driven by the decade's renewed interest in home gardening and by the universal experience of planting one zucchini plant and finding yourself buried in squash by August. The quick bread format was well suited to incorporating moisture-heavy grated zucchini. The spice profile made it sweet enough to serve as a snack or dessert despite being technically a vegetable bread. It was also genuinely good, which explains why it survived beyond the zucchini-surplus problem that created it.",
      type: "Side",
      difficulty: 1,
      servings: 16,
      description: "The 1970s zucchini surplus problem solved: grated zucchini folded into a spiced quick bread. Every suburban garden produced more zucchini than could be eaten, and this was the answer.",
      ingredients: ["3 cups flour", "1 tsp salt", "1 tsp baking soda", "1 tsp baking powder", "3 tsp cinnamon", "3 eggs", "1 cup vegetable oil", "2¼ cups sugar", "3 tsp vanilla", "2 cups grated zucchini", "1 cup walnuts, chopped"],
      instructions: ["Preheat oven to 325°F. Grease two 9x5 loaf pans.", "Sift flour, salt, soda, baking powder, and cinnamon.", "Beat eggs, oil, sugar, and vanilla until light.", "Stir in flour mixture until just combined.", "Fold in zucchini and walnuts.", "Divide between pans. Bake 55-65 minutes until a toothpick comes out clean.", "Cool in pans 10 minutes before turning out."]
    },
    {
      name: "Stuffed Mushrooms",
      region: "Nationwide; stuffed mushrooms became the defining cocktail party appetizer of the 1970s, appearing in virtually every entertaining guide published in the decade",
      notable: "Stuffed mushrooms appear in more 1970s cooking magazines and community cookbooks than almost any other appetizer — they were the decade's equivalent of today's bruschetta, a catch-all entertaining dish that every host relied on.",
      history: "Stuffed mushrooms were a product of two 1970s trends: the expansion of mushroom availability in American supermarkets and the popularity of cream cheese as a cooking ingredient. Before the 1960s, large cultivated mushrooms were not consistently available in most American markets. By the 1970s they were standard, and their natural bowl shape made them ideal for stuffing. The sausage-and-cream-cheese filling was the most popular combination — rich, flavorful, and forgiving of inexact quantities. The dish could be assembled ahead and baked when guests arrived, which suited the era's more relaxed entertaining style.",
      type: "Appetizer",
      difficulty: 2,
      servings: 6,
      description: "Large mushroom caps stuffed with a mixture of sausage, breadcrumbs, and cream cheese — a 1970s cocktail party stalwart that appeared at every gathering.",
      ingredients: ["24 large mushrooms, stems removed", "½ lb Italian sausage, removed from casing", "4 oz cream cheese, softened", "¼ cup breadcrumbs", "2 cloves garlic, minced", "2 tbsp parsley, chopped", "¼ cup Parmesan, grated", "Salt, pepper"],
      instructions: ["Preheat oven to 375°F.", "Brown sausage; drain fat. Mince mushroom stems and cook with sausage and garlic.", "Mix sausage mixture with cream cheese, breadcrumbs, and parsley. Season.", "Stuff mushroom caps generously. Top with Parmesan.", "Arrange in a baking dish.", "Bake 20-25 minutes until mushrooms are tender and tops are golden."]
    },
    {
      name: "Marinated Mushrooms",
      region: "Nationwide; this particular recipe was developed by the Consumer Test Kitchens at H.J. Heinz in Pittsburgh",
      notable: "Marinated mushrooms remained popular right through the last half of the twentieth century, appearing on cocktail party platters, antipasto plates, and salad bars from the 1960s onward. The H.J. Heinz Consumer Test Kitchens recipe became one of the most widely circulated versions.",
      history: "Marinated mushrooms emerged as a cocktail party staple in the 1960s and 70s as fresh mushrooms became consistently available in American supermarkets. The technique — simmering whole button mushrooms briefly in an herb and vinegar marinade, then chilling them — produced something that could be made days ahead, traveled well, and required no last-minute attention. They appeared on every antipasto platter and cocktail table of the era alongside olives, celery, and deviled eggs. Their decline as a fashionable party food came with the rise of more elaborate passed appetizers in the 1980s and 90s.",
      type: "Appetizer",
      difficulty: 1,
      servings: 12,
      description: "Whole button mushrooms simmered in an herb and tarragon-chive vinegar marinade, then chilled and served with toothpicks — the make-ahead cocktail party staple of the 1960s and 70s.",
      ingredients: [
        "¾ cup vegetable oil or fruity olive oil",
        "½ cup Tarragon-Chive Vinegar (or white wine vinegar with 1 tsp dried tarragon)",
        "1½ tsp salt",
        "1 tsp sugar",
        "½ tsp dried leaf basil, crumbled",
        "¼ tsp ground thyme",
        "6 peppercorns",
        "1 clove garlic, peeled and split",
        "1 whole bay leaf",
        "1½ lbs fresh small mushrooms of uniform size, stemmed and rinsed"
      ],
      instructions: [
        "Mix oil, vinegar, salt, sugar, basil, thyme, peppercorns, garlic, and bay leaf in a large saucepan.",
        "Set over moderate heat, cover, and simmer 10 minutes.",
        "Add mushrooms and simmer uncovered 3 minutes.",
        "Pour all into a heat-proof ceramic bowl, cover, and chill several hours or overnight, stirring occasionally.",
        "Drain mushrooms, discard bay leaf, and serve with toothpicks as a cocktail appetizer."
      ]
    },
    {
      name: "Chicken Tetrazzini",
      region: "Created in San Francisco, likely at the Palace Hotel, around 1908-1910; named for Luisa Tetrazzini, the Italian operatic soprano who was a sensation in San Francisco",
      notable: "Luisa Tetrazzini was so beloved in San Francisco that when she gave a free outdoor Christmas concert on Market Street in 1910, over 250,000 people attended. The dish named in her honor outlasted both her fame and the restaurant that created it.",
      history: "Chicken Tetrazzini was created in San Francisco's Palace Hotel around the time of Luisa Tetrazzini's triumphant appearances there in the early 1900s. The dish reached its peak popularity in the 1960s and 70s, when it became a church supper and potluck staple: it fed crowds economically, could be made ahead, and transported well. Its association with the casserole era gave it a slightly dated reputation in the 1980s from which it has never fully recovered.",
      type: "Main",
      difficulty: 2,
      servings: 8,
      description: "Cooked spaghetti and chicken in a cream and sherry sauce, baked under a Parmesan crust — a casserole named after opera star Luisa Tetrazzini, enormously popular in the 1970s.",
      ingredients: ["12 oz thin spaghetti, cooked", "3 cups cooked chicken, cubed", "1 lb mushrooms, sliced", "4 tbsp butter", "4 tbsp flour", "2 cups chicken broth", "1 cup cream", "¼ cup dry sherry", "½ cup Parmesan, grated", "Salt, pepper"],
      instructions: ["Sauté mushrooms in butter until golden. Stir in flour.", "Add broth gradually, then cream and sherry. Simmer until thick.", "Toss sauce with cooked spaghetti and chicken.", "Transfer to a buttered 3-quart baking dish.", "Top with Parmesan.", "Bake at 375°F for 25-30 minutes until golden and bubbling."]
    },
    {
      name: "Watergate Salad",
      region: "Nationwide; a Chicago Tribune food columnist named it Watergate Salad in 1975 in the aftermath of the Nixon scandal, claiming the recipe was full of nuts and covered up",
      notable: "The Watergate Salad was named satirically — the joke being that the salad was full of nuts and covered up. The name stuck, and the recipe became one of the most recognizable of the 1970s potluck circuit.",
      history: "Watergate Salad is almost certainly the only dish in culinary history named after a political scandal, and the naming was an act of wit rather than documentation — the dish existed before the Watergate break-in under different names. The combination of instant pistachio pudding, undrained crushed pineapple, Cool Whip, marshmallows, and nuts produced a sweet, green, slightly surreal side dish served at potlucks and church socials across America. The name, once applied, spread through the same informal networks that distributed the recipe itself.",
      type: "Dessert/Side",
      difficulty: 1,
      servings: 8,
      description: "Pistachio pudding mix, crushed pineapple, Cool Whip, marshmallows, and nuts — named after the scandal by a food columnist in 1975. It shouldn't work. It does.",
      ingredients: ["1 package (3.4 oz) instant pistachio pudding", "1 can (20 oz) crushed pineapple, undrained", "1 cup mini marshmallows", "½ cup chopped pecans or walnuts", "8 oz Cool Whip, thawed"],
      instructions: ["Mix dry pudding mix directly into undrained crushed pineapple.", "Stir until the pudding mix is dissolved and mixture thickens.", "Fold in marshmallows and nuts.", "Fold in Cool Whip until evenly blended.", "Refrigerate at least 1 hour before serving.", "Serve cold as a side salad or dessert."]
    },
    {
      name: "Queso Flameado",
      region: "Northern Mexico and the Texas border region; El Paso and San Antonio restaurants brought it to American dining rooms in the 1970s as Tex-Mex cuisine began its national expansion",
      notable: "Queso flameado is a staple of Chihuahua and Sonora state cooking in Mexico, where it is made with Asadero or Chihuahua cheese. Its American popularization through Tex-Mex restaurants in the 1970s gave it a new audience without significantly altering the recipe.",
      history: "Queso flameado is one of the genuinely Mexican dishes that entered American dining through the Tex-Mex restaurant expansion of the 1970s and 80s. Unlike much Tex-Mex food, which was significantly altered in the translation, queso flameado remained relatively close to its northern Mexican origins: melted cheese with chorizo in a cast iron skillet, set alight with tequila or brandy. The dish arrived in American suburban restaurants just as the flambé tradition in fine dining was fading — it offered the drama of the open flame in a more casual, accessible format.",
      type: "Appetizer",
      difficulty: 1,
      servings: 6,
      description: "Whole-milk cheese melted with chorizo in a skillet, set briefly aflame with tequila — Tex-Mex began arriving in suburban America in the 1970s and this was its ambassador.",
      ingredients: ["1 lb Oaxacan or Chihuahua cheese (or whole-milk mozzarella), shredded", "½ lb Mexican chorizo, cooked and crumbled", "2 tbsp tequila", "Warm flour tortillas to serve"],
      instructions: ["Preheat oven to 450°F.", "Spread cheese in a cast iron skillet. Top with cooked chorizo.", "Bake 10-12 minutes until cheese is fully melted and bubbling.", "Remove from oven; drizzle tequila over top.", "Ignite carefully with a long match. Let flames die.", "Serve immediately in the skillet with warm tortillas."]
    },
    {
      name: "Pasta Primavera (Original Sirio Version)",
      region: "Created at Le Cirque restaurant in New York City by owner Sirio Maccioni and chef Jean Vergnes around 1975; became nationally famous through a 1977 New York Times article",
      notable: "Craig Claiborne's 1977 New York Times article about pasta primavera at Le Cirque is credited with launching the dish into national consciousness. The piece was so widely read that Le Cirque was overwhelmed with requests for the recipe.",
      history: "Pasta primavera is a genuinely documented creation — Sirio Maccioni and his kitchen at Le Cirque developed it in the mid-1970s as a light pasta dish showcasing fresh spring vegetables. The original was almost ascetically simple: olive oil, garlic, Parmesan, and whatever spring vegetables were best that day. What happened next was classic American culinary drift: restaurant versions added cream, butter, and heavier sauces, and primavera became attached to any pasta with vegetables in a cream sauce. The original Le Cirque version was healthier and more elegant than what the name eventually came to mean.",
      type: "Main",
      difficulty: 3,
      servings: 4,
      description: "The original 1970s pasta primavera from Le Cirque — not the cream-sauce version that was popularized, but a clean olive oil and Parmesan dish with fresh spring vegetables.",
      ingredients: ["1 lb spaghetti or thin pasta", "1 cup broccoli florets", "1 cup zucchini, sliced", "1 cup cherry tomatoes", "½ cup frozen peas", "4 cloves garlic, sliced", "¼ cup olive oil", "½ cup Parmesan, grated", "Salt, pepper", "Fresh basil"],
      instructions: ["Cook pasta in well-salted boiling water. Reserve 1 cup pasta water.", "Steam broccoli and zucchini briefly until just tender.", "Warm garlic in olive oil over medium heat until fragrant.", "Add tomatoes; cook 2 min. Add peas and blanched vegetables.", "Toss drained pasta with vegetables and garlic oil.", "Add pasta water as needed. Toss with Parmesan. Finish with fresh basil."]
    },
    {
      name: "Ham and Cheese Rollups",
      region: "Nationwide; the rollup appetizer was a product of the 1970s entertaining culture that valued make-ahead, no-cook party food",
      notable: "The ham and cheese rollup predated the wrap sandwich craze of the 1990s by nearly two decades, though it was never acknowledged as its ancestor when wraps became fashionable in café culture.",
      history: "Ham and cheese rollups were a practical solution to the 1970s home entertainer's challenge: a party appetizer that could be assembled hours ahead and sliced at serving time without any last-minute fuss. The flour tortilla, which was becoming available in mainstream supermarkets for the first time in the early 1970s, proved an ideal vehicle. When the 1990s wrap sandwich craze arrived in cafés and delis, it was essentially rediscovering what 1970s home cooks had been doing for twenty years — but the connection was never made, and the humble rollup never got credit.",
      type: "Appetizer",
      difficulty: 1,
      servings: 12,
      description: "Cream cheese-spread tortillas or thin bread, rolled around sliced ham and pickle — a 1970s cocktail party fixture that predates the wrap by a decade.",
      ingredients: ["4 large flour tortillas or thin slices sandwich bread", "8 oz cream cheese, softened", "1 tbsp ranch dressing mix", "8 oz deli ham, thinly sliced", "4 dill pickles or pickle spears"],
      instructions: ["Mix cream cheese with ranch seasoning until smooth.", "Spread generously over tortillas or bread slices.", "Layer ham evenly over cream cheese.", "Place a pickle at one end. Roll up tightly.", "Wrap in plastic wrap and refrigerate 1 hour.", "Slice into 1-inch rounds. Secure with toothpicks if needed."]
    },
    {
      name: "Clam Chowder (New England, Home Style)",
      region: "New England, particularly Massachusetts, Rhode Island, and Connecticut; the Manhattan vs. New England chowder debate is one of American food culture's longest-running arguments",
      notable: "A 1939 Maine bill proposed making it illegal to add tomatoes to clam chowder — the ultimate expression of New England's passionate defense of the cream version against Manhattan's tomato-based alternative.",
      history: "New England clam chowder is among the oldest distinctly American dishes, with documented recipes from the 1750s. The chowder tradition originated with New England fishing communities who made the soup from local clams, potatoes, salt pork, and dairy. The home-cooked version differed from restaurant chowder in being thinner and more intensely clam-flavored; restaurants favored the thick, flour-heavy version that has become standard. The 1939 Maine anti-tomato legislation — largely a joke but carrying real cultural weight — captures how seriously New Englanders took their chowder orthodoxy.",
      type: "Soup",
      difficulty: 3,
      servings: 6,
      description: "Thick, creamy, potato-and-clam chowder made from scratch at home — not the thick gluey restaurant version, but a genuine home-cooked pot that was an October staple.",
      ingredients: ["4 slices thick bacon, diced", "1 large onion, diced", "4 large potatoes, cubed", "3 cans (6.5 oz) chopped clams, juice reserved", "2 cups clam juice (bottled or reserved)", "2 cups heavy cream", "1 cup whole milk", "2 tbsp butter", "Salt, white pepper", "Oyster crackers to serve"],
      instructions: ["Render bacon in a large pot. Remove bacon; cook onion in fat until soft.", "Add potatoes and clam juice. Simmer until potatoes are just tender, about 15 min.", "Add clams and their liquid.", "Stir in cream and milk. Heat gently — do not boil.", "Finish with butter. Season generously.", "Serve with oyster crackers and reserved bacon crumbled on top."]
    },
    {
      name: "Spaghetti Western (1970s Home Pasta)",
      region: "Nationwide; the American meat sauce spaghetti was so deeply embedded in mainstream cooking by the 1970s that it existed as its own distinct culinary tradition with no meaningful Italian connection",
      notable: "American-style spaghetti with meat sauce appears in more postwar family recipe boxes and community cookbooks than almost any other dish — it was the weeknight default for millions of families from the 1950s through the 1980s.",
      history: "American spaghetti with meat sauce bears no relationship to any specific Italian dish. It evolved from the Italian-American cooking of immigrant communities in the early 20th century — a practical adaptation using American ingredients — and then spread into the mainstream where it was further simplified. By the 1970s it had become a distinctly American dish: the sauce sweeter, the meat more prominent, the cheese more assertive, the cooking time shorter. The Italian cooking renaissance of the 1980s and 90s, which introduced Americans to actual Italian pasta traditions, eventually marginalized the American version without eliminating it.",
      type: "Main",
      difficulty: 1,
      servings: 4,
      description: "Ground beef, onion, canned tomatoes, and Worcestershire poured over spaghetti with too much Parmesan — this was 'Italian' cooking in 1970s Middle America.",
      ingredients: ["1 lb spaghetti", "1 lb ground beef", "1 large onion, chopped", "2 cans (14 oz) crushed tomatoes", "1 tbsp Worcestershire sauce", "2 cloves garlic", "1 tsp sugar", "Italian seasoning", "Salt, pepper", "Parmesan to serve"],
      instructions: ["Brown beef with onion and garlic; drain fat.", "Add tomatoes, Worcestershire, sugar, and Italian seasoning. Simmer 30 minutes.", "Cook spaghetti. Drain.", "Plate pasta; ladle meat sauce over top.", "Pass Parmesan at the table.", "Note the conspicuous absence of any authentic Italian technique."]
    },
    {
      name: "Coconut Cream Pie (1970s Diner Version)",
      region: "Nationwide; the diner pie case — featuring rotating displays of cream pies — was a mid-century American institution from the 1940s through the 1970s",
      notable: "The diner pie case, with its rotating display of whole pies, was one of the most distinctive features of mid-century American roadside culture. Edward Hopper's diner paintings capture the aesthetic context in which these pies existed.",
      history: "Coconut cream pie was a staple of the American diner pie case from the 1940s through the 1970s, when the diner as an institution was at its cultural peak. The pie case — a glass rotating display of whole pies at the counter — was one of the most distinctive features of diner culture, and coconut cream was always one of its centerpieces alongside banana cream and lemon meringue. The filling was a proper pastry cream, not a pudding mix preparation; the whipped cream topping was real cream. The decline of the independent diner in favor of fast food chains from the 1970s onward gradually reduced the pie case from a standard feature to a nostalgic specialty.",
      type: "Dessert",
      difficulty: 3,
      servings: 8,
      description: "Thick coconut pastry cream in a baked shell, topped with a mountain of whipped cream and toasted coconut — the diner case standout before it faded.",
      ingredients: ["1 prebaked 9-inch pie shell", "2½ cups whole milk", "½ cup sugar", "⅓ cup cornstarch", "3 egg yolks", "2 tbsp butter", "1 tsp vanilla", "1½ cups sweetened shredded coconut", "2 cups whipped cream", "½ cup coconut, toasted"],
      instructions: ["Whisk sugar, cornstarch, and egg yolks. Heat milk to simmer; whisk into yolk mixture.", "Cook over medium heat, stirring constantly, until thick and boiling.", "Remove from heat; stir in butter, vanilla, and 1 cup coconut.", "Press plastic wrap directly on surface. Cool completely.", "Spread filling in pie shell.", "Top with whipped cream and toasted coconut.", "Refrigerate 3 hours before slicing."]
    },
    {
      name: "Avocado Dip (Original Guacamole Substitute)",
      region: "California and the Sunbelt states, where California Hass avocados were first commercially produced",
      notable: "The California Avocado Commission ran extensive promotional campaigns in the 1970s to introduce Americans to avocados, distributing recipe booklets that included this onion soup mix version as an accessible entry point for consumers unfamiliar with the fruit.",
      history: "The American relationship with avocados before the 1970s was thin outside California and the Southwest. The California Avocado Commission's 1970s promotional campaign sought to change this, positioning the avocado as a versatile, modern ingredient. The onion soup mix version of avocado dip was a deliberate simplification for nervous home cooks — using a familiar processed ingredient to make an unfamiliar fruit approachable. Authentic guacamole, known only through Mexican and Tex-Mex restaurants, came later. This version preceded it and, for millions of American families, was the first avocado preparation they ever encountered.",
      type: "Appetizer",
      difficulty: 1,
      servings: 8,
      description: "In the 1970s, avocados were new to many American kitchens — this version mashed them with sour cream, onion soup mix, and lemon juice. Decidedly not authentic, but beloved.",
      ingredients: ["3 ripe avocados", "½ cup sour cream", "1 packet (1 oz) onion soup mix", "2 tbsp lemon juice", "1 clove garlic, minced", "Salt, pepper", "Tortilla chips or crackers"],
      instructions: ["Halve avocados, remove pits.", "Mash flesh with a fork until mostly smooth.", "Stir in sour cream, onion soup mix, lemon juice, and garlic.", "Season with salt and pepper.", "Press plastic wrap directly on surface to prevent browning.", "Serve chilled with chips or crackers."]
    },
  ]
};

const presidents = {
  "pre-1910s": [
    {
      name: "George Washington",
      number: 1, years: "1789–1797",
      presidentName: "George Washington",
      dishName: "Hoecakes with Honey and Butter",
      type: "Breakfast",
      servings: 8,
      difficulty: 1,
      description: "The dish Washington ate every single morning of his adult life — a simple cornmeal pancake, cooked on a griddle, served swimming in butter and honey. Martha Washington's granddaughter Nelly Custis documented this ritual in detail. No recipe in this collection is more thoroughly verified.",
      region: "Mount Vernon, Virginia",
      notable: "Martha Washington's granddaughter Nelly Custis wrote that Washington ate hoecakes every morning at breakfast, 'swimming in butter and honey,' and that he consumed them with great relish before any other food.",
      ingredients: ["1 cup white cornmeal", "½ tsp salt", "1 cup boiling water", "2 tbsp cold water (to cool the batter)", "Butter for griddle", "Softened butter and honey to serve"],
      instructions: ["Mix cornmeal and salt in a bowl.", "Pour boiling water over the cornmeal, stirring constantly until a thick batter forms.", "Add cold water to cool slightly and loosen to a pourable consistency.", "Heat a cast iron griddle over medium heat. Grease generously with butter.", "Drop batter by large spoonfuls. Spread slightly into rounds about ½ inch thick.", "Cook until edges are set and underside is golden, about 3-4 minutes.", "Flip and cook another 2-3 minutes.", "Serve immediately with a generous knob of softened butter and a liberal pour of honey."]
    },
    {
      name: "Mount Vernon Salt Cod",
      number: 1, years: "1789–1797",
      presidentName: "George Washington",
      dishName: "Mount Vernon Salt Cod",
      type: "Main",
      servings: 4,
      difficulty: 2,
      description: "Washington kept salt cod in regular supply at Mount Vernon — a common and inexpensive protein of the era, prepared simply with butter and cream. This is a period-accurate preparation of the dish as it would have appeared on his table.",
      region: "Mount Vernon, Virginia",
      notable: "Salt cod was so fundamental to the early American diet that it was sometimes called 'the beef of the sea.' Washington's household accounts show regular purchases of salt fish throughout his life.",
      ingredients: ["1 lb salt cod", "4 tbsp butter", "1 cup heavy cream", "1 small onion, minced", "Black pepper", "Fresh parsley", "Boiled potatoes to serve"],
      instructions: ["Soak salt cod in cold water for 24 hours, changing the water 3-4 times.", "Drain and place in a pot of fresh cold water. Bring slowly to a simmer.", "Poach gently 15-20 minutes until fish flakes easily. Drain and flake, removing any bones.", "Melt butter in a skillet over medium heat. Cook onion until soft and translucent.", "Add cream and bring to a gentle simmer. Fold in flaked cod.", "Season with black pepper — the cod provides all the salt needed.", "Serve over boiled potatoes, garnished with fresh parsley."]
    },
    {
      name: "John Adams Hard Cider",
      number: 2, years: "1797–1801",
      presidentName: "John Adams",
      dishName: "Hard Apple Cider",
      type: "Drink",
      servings: 1,
      difficulty: 2,
      description: "Adams began drinking a gill of hard cider every morning at Harvard and never stopped — he credited it with his remarkable longevity (he lived to 90). This is the simple farmhouse method for making hard cider as it would have been made in colonial Massachusetts.",
      region: "Quincy, Massachusetts",
      notable: "Adams wrote in his diary that he 'never forgot how refreshing and salubrious' he found hard cider at Harvard. He drank it every morning for over 70 years and took barrels of it when he traveled.",
      ingredients: ["1 gallon fresh-pressed apple juice (no preservatives)", "½ tsp active dry yeast (or wild-fermented with no yeast added)", "Optional: 1 cup honey or brown sugar for a stronger cider"],
      instructions: ["Press or purchase fresh apple juice with no added preservatives — these will prevent fermentation.", "Pour juice into a clean glass jug or ceramic crock.", "If using yeast: dissolve ½ tsp active dry yeast in 2 tbsp warm water; add to juice.", "For wild fermentation (as Adams would have done): simply cover loosely with cloth.", "Cover with a breathable cloth secured with a rubber band.", "Leave at room temperature (60-70°F) for 1-2 weeks. Bubbling will begin within 48 hours.", "Taste after one week — it will be lightly alcoholic and pleasantly tart.", "Strain into bottles. Refrigerate to slow fermentation.", "Drink young and cold, as Adams did, or leave several more weeks for a drier cider."]
    },
    {
      name: "Indian Pudding",
      number: 2, years: "1797–1801",
      presidentName: "John Adams",
      dishName: "Indian Pudding",
      type: "Dessert",
      servings: 6,
      difficulty: 2,
      description: "Indian pudding — a slow-baked cornmeal pudding sweetened with molasses and spiced with ginger and cinnamon — was the definitive New England dessert of the colonial and early republic era. Adams ate it his entire life.",
      region: "New England; particularly Boston and coastal Massachusetts",
      notable: "Indian pudding takes its name from 'Indian meal' — the colonial term for cornmeal, which settlers learned to use from Native Americans. It was the most widely eaten dessert in New England for over two centuries.",
      ingredients: ["4 cups whole milk", "⅓ cup yellow cornmeal", "⅓ cup dark molasses", "2 tbsp butter", "1 tsp ground ginger", "½ tsp cinnamon", "¼ tsp salt", "2 eggs, beaten", "1 cup cold milk (poured over top before baking)"],
      instructions: ["Preheat oven to 300°F. Butter a deep baking dish.", "Scald 4 cups milk in a heavy saucepan over medium heat.", "Whisk in cornmeal in a slow, steady stream. Stir constantly for 5 minutes until slightly thickened.", "Remove from heat. Stir in molasses, butter, ginger, cinnamon, and salt.", "Cool 10 minutes, then beat in eggs.", "Pour into buttered baking dish.", "Pour 1 cup cold milk gently over the top — do not stir.", "Bake at 300°F for 2-2½ hours until set but still slightly wobbly in the center.", "Serve warm with heavy cream or a scoop of vanilla ice cream."]
    },
    {
      name: "Jefferson Macaroni and Cheese",
      number: 3, years: "1801–1809",
      presidentName: "Thomas Jefferson",
      dishName: "Jefferson's Macaroni and Cheese",
      type: "Main",
      servings: 6,
      difficulty: 3,
      description: "Jefferson hand-copied a macaroni recipe in his own handwriting after encountering pasta in Europe — that document survives. This recipe is based on his notes and the preparation he served at a White House dinner in 1802, which reportedly baffled his guests who had never seen the dish.",
      region: "Monticello, Virginia; Paris, France",
      notable: "Jefferson's handwritten macaroni recipe, dated around 1793, still exists in the Library of Congress. It calls for pasta made from a machine he brought back from Naples. He served it at a White House dinner in 1802 — a guest recorded in his diary being served 'a pie called macaroni.'",
      ingredients: ["1 lb elbow macaroni or short tube pasta", "4 tbsp butter", "4 tbsp flour", "2 cups whole milk", "1 cup heavy cream", "2 cups sharp cheddar, grated", "½ cup Parmesan, grated", "1 tsp dry mustard", "Salt, white pepper", "Pinch nutmeg", "Breadcrumbs for topping"],
      instructions: ["Cook macaroni in heavily salted boiling water until just tender. Drain.", "Melt butter in a saucepan over medium heat. Whisk in flour and cook 1 minute.", "Add milk and cream gradually, whisking constantly until thick and smooth.", "Remove from heat. Stir in cheddar, half the Parmesan, mustard, nutmeg, salt, and pepper.", "Fold in drained macaroni.", "Transfer to a buttered baking dish. Top with remaining Parmesan and breadcrumbs.", "Bake at 375°F for 25-30 minutes until golden and bubbling.", "Rest 5 minutes before serving."]
    },
    {
      name: "Jefferson Vanilla Ice Cream",
      number: 3, years: "1801–1809",
      presidentName: "Thomas Jefferson",
      dishName: "Jefferson's Vanilla Ice Cream",
      type: "Dessert",
      servings: 8,
      difficulty: 4,
      description: "Jefferson discovered ice cream in Paris and brought the recipe home. His handwritten recipe for vanilla ice cream — 18 steps — also survives in the Library of Congress. It is one of the earliest American ice cream recipes in existence.",
      region: "Paris, France; Monticello, Virginia",
      notable: "Jefferson's 18-step handwritten vanilla ice cream recipe is one of the most famous documents in American food history. It calls for 6 egg yolks, 2 bottles of cream, and 'the smallest stick of vanilla' — a luxury ingredient in 1780s France.",
      ingredients: ["2 cups heavy cream", "1 cup whole milk", "6 egg yolks", "¾ cup sugar", "1 vanilla bean, split and scraped (or 2 tsp vanilla extract)", "Pinch salt"],
      instructions: ["Combine cream, milk, and vanilla bean (pod and seeds) in a saucepan. Heat over medium until steaming — do not boil.", "Whisk egg yolks and sugar together until pale and thick.", "Slowly pour hot cream into yolk mixture, whisking constantly (tempering).", "Return mixture to saucepan over medium-low heat.", "Stir constantly with a wooden spoon until custard thickens and coats the back of a spoon (170°F). Do not boil.", "Strain through a fine sieve. Stir in salt. Remove vanilla pod.", "Cool completely over an ice bath, then refrigerate at least 4 hours.", "Churn in an ice cream maker according to manufacturer instructions.", "Pack into a container and freeze at least 2 hours before serving."]
    },
    {
      name: "Dolley Madison Ice Cream",
      number: 4, years: "1809–1817",
      presidentName: "James Madison",
      dishName: "Dolley Madison's Strawberry Ice Cream",
      type: "Dessert",
      servings: 8,
      difficulty: 4,
      description: "Dolley Madison served ice cream at White House state dinners so frequently that she is largely credited with making it fashionable in America. This strawberry version is based on the period preparation — a simple custard base churned with fresh crushed strawberries.",
      region: "Washington D.C.; Montpelier, Virginia",
      notable: "When the British burned the White House in 1814, Dolley Madison famously saved the portrait of George Washington before fleeing. She also apparently had ice cream on the table that night for a dinner she never got to serve.",
      ingredients: ["1 lb fresh strawberries, hulled", "¾ cup sugar, divided", "2 cups heavy cream", "1 cup whole milk", "4 egg yolks", "1 tsp lemon juice"],
      instructions: ["Crush strawberries with ¼ cup sugar. Let sit 30 minutes to macerate. Push through a sieve for a smooth puree.", "Heat cream and milk in a saucepan until steaming.", "Whisk egg yolks with remaining ½ cup sugar until pale.", "Temper hot cream into yolks. Return to saucepan and cook gently until thickened.", "Strain custard. Cool completely over ice.", "Stir in strawberry puree and lemon juice.", "Refrigerate until cold. Churn in an ice cream maker.", "Freeze at least 2 hours before serving."]
    },
    {
      name: "Madison Virginia Ham",
      number: 4, years: "1809–1817",
      presidentName: "James Madison",
      dishName: "Virginia Country Ham",
      type: "Main",
      servings: 12,
      difficulty: 4,
      description: "Virginia country ham — dry-cured with salt and sugar, smoked over hickory, and aged for months — was Madison's absolute favorite food. This is the traditional preparation method for cooking a whole Virginia ham.",
      region: "Virginia; particularly the Smithfield and Tidewater regions",
      notable: "Virginia country ham has been produced in the same tradition since colonial times. Madison's home Montpelier was in Orange County, Virginia, where the hog-raising and ham-curing tradition was central to plantation life.",
      ingredients: ["1 whole Virginia country ham (12-15 lbs)", "Water for soaking", "2 cups brown sugar", "1 cup apple cider vinegar", "1 tbsp black pepper", "Whole cloves for studding"],
      instructions: ["Scrub ham thoroughly under cold water to remove any mold (normal on aged hams).", "Place ham in a large container. Cover completely with cold water. Soak 24-48 hours, changing water twice. This removes excess salt.", "Place soaked ham in a large roasting pan skin side up. Cover with fresh water.", "Bring to a boil, reduce heat, and simmer 20 minutes per pound until internal temperature reaches 160°F.", "Remove from liquid. Score the skin in a diamond pattern. Stud each diamond with a clove.", "Mix brown sugar, vinegar, and pepper into a glaze. Brush over scored ham.", "Roast at 375°F for 30-40 minutes until glaze is caramelized and sticky.", "Rest 30 minutes before slicing paper-thin."]
    },
    {
      name: "Monroe Spoon Bread",
      number: 5, years: "1817–1825",
      presidentName: "James Monroe",
      dishName: "Virginia Spoon Bread",
      type: "Side",
      servings: 6,
      difficulty: 3,
      description: "Spoon bread — a soft, custardy baked cornmeal dish somewhere between a soufflé and a bread pudding — was a Virginia tradition Monroe ate throughout his life. It is eaten with a spoon directly from the baking dish, served alongside roasted meats.",
      region: "Virginia; the Shenandoah Valley and Tidewater regions",
      notable: "Spoon bread is one of the oldest distinctly American dishes, descended from a Native American cornmeal preparation. It has been a Virginia staple since the 17th century and appears in nearly every Virginia cookbook ever published.",
      ingredients: ["2 cups water", "1 cup white cornmeal", "1 tsp salt", "1 tbsp sugar", "3 tbsp butter", "1 cup whole milk", "3 eggs, separated", "2 tsp baking powder"],
      instructions: ["Preheat oven to 375°F. Butter a 2-quart baking dish.", "Bring water to a boil. Whisk in cornmeal, salt, and sugar. Cook over medium heat, stirring constantly, until thick like porridge (about 5 minutes).", "Remove from heat. Stir in butter until melted.", "Beat in milk and egg yolks one at a time.", "Stir in baking powder.", "Beat egg whites to stiff peaks.", "Fold whites gently into cornmeal mixture in three additions.", "Pour into buttered dish.", "Bake 35-40 minutes until puffed and golden on top but still slightly soft in the center.", "Serve immediately from the dish with a large spoon."]
    },
    {
      name: "Jackson Leather Britches",
      number: 7, years: "1829–1837",
      presidentName: "Andrew Jackson",
      dishName: "Leather Britches (Dried Green Beans with Bacon)",
      type: "Side",
      servings: 6,
      difficulty: 2,
      description: "Leather britches — green beans strung on thread and dried, then cooked low and slow with bacon — were a staple of Jackson's Tennessee backwoods upbringing. The drying process concentrates the bean's flavor dramatically. This was the dish he most associated with home.",
      region: "The Hermitage, Tennessee; Appalachia",
      notable: "Leather britches are an Appalachian preservation tradition dating back centuries, taught to settlers by Cherokee and other Native American nations. Jackson grew up eating them in the Carolina backcountry before moving to Tennessee.",
      ingredients: ["1 lb dried leather britches beans (or 1 lb fresh green beans, dried in a low oven for 6-8 hours)", "½ lb thick-cut bacon or salt pork, cut in chunks", "1 onion, halved", "Salt and black pepper", "Water to cover"],
      instructions: ["If making your own: thread fresh green beans on heavy thread or twine through the middle of each bean. Hang in a dry, airy place for 2-3 weeks until completely dried and leathery.", "Break dried beans into 2-inch pieces. Rinse well.", "Place in a heavy pot with bacon, onion, and enough water to cover by 2 inches.", "Bring to a boil, skim any foam.", "Reduce heat to the lowest possible simmer. Cover and cook 2½-3 hours, adding water as needed.", "Beans should be very soft and deeply flavored. Season generously with salt and pepper.", "Serve with cornbread."]
    },
    {
      name: "Van Buren Boars Head",
      number: 8, years: "1837–1841",
      presidentName: "Martin Van Buren",
      dishName: "Roast Boar's Head with Glaze",
      type: "Main",
      servings: 12,
      difficulty: 4,
      description: "Van Buren developed his love of roast boar's head during a diplomatic Christmas in England, where Washington Irving documented the tradition. He brought it back to Kinderhook as a Christmas tradition. This is the classic English preparation with a sweet-savory glaze.",
      region: "Kinderhook, New York; England",
      notable: "Washington Irving, who accompanied Van Buren to England, wrote to his sister describing 'an old-fashioned English Christmas' with 'mummers and morris dancers and the boar's head crowned with holly.' Van Buren became a boar devotee on the spot.",
      ingredients: ["1 whole boar's or pig's head, cleaned", "2 tbsp salt", "1 tbsp black pepper", "1 tbsp brown sugar", "4 cloves garlic, minced", "Fresh bay leaves, sage, rosemary", "GLAZE: 1 cup honey", "½ cup cider vinegar", "2 tbsp whole grain mustard", "1 tsp allspice"],
      instructions: ["Rub head thoroughly with salt, pepper, sugar, and garlic. Pack cavity with herbs.", "Wrap tightly in plastic wrap. Refrigerate 24-48 hours.", "Preheat oven to 325°F. Place head in a large roasting pan. Add 2 cups water to pan.", "Cover tightly with foil. Roast 4-5 hours until meat is completely tender.", "Uncover. Mix glaze ingredients and brush generously over the head.", "Increase heat to 425°F. Roast uncovered 20-30 minutes until skin is crackled and glaze is caramelized.", "Garnish with holly and an apple in the mouth for the traditional presentation.", "Carve at the table."]
    },
    {
      name: "Harrison Burgoo",
      number: 9, years: "1841",
      presidentName: "William Henry Harrison",
      dishName: "Kentucky Burgoo (Frontier Stew)",
      type: "Soup/Stew",
      servings: 8,
      difficulty: 2,
      description: "Burgoo is the definitive frontier stew of Kentucky and Ohio — a long-cooked pot of whatever was available, traditionally including squirrel, along with whatever vegetables could be had. Harrison's association with it was central to his 'Log Cabin and Hard Cider' campaign of 1840.",
      region: "Kentucky; the Ohio River Valley frontier",
      notable: "Burgoo stew is still made in enormous quantities at Kentucky Derby events and political gatherings in Kentucky, typically in iron kettles over open fires feeding hundreds of people. Harrison's campaign used it as a symbol of frontier authenticity.",
      ingredients: ["1 lb mixed game meat — squirrel, rabbit, or venison, cut in pieces (chicken works as a substitute)", "½ lb pork shoulder, cubed", "4 potatoes, cubed", "3 carrots, sliced", "2 stalks celery, sliced", "1 large onion, chopped", "1 cup corn kernels", "1 cup lima beans", "1 can tomatoes", "Salt, black pepper", "Cayenne pepper"],
      instructions: ["Brown all meats in batches in a heavy pot over high heat. Remove.", "Cook onion and celery in the same pot until soft.", "Return all meat to the pot. Add enough water to cover by 3 inches.", "Bring to a boil, skim well, then reduce to a low simmer.", "Cook for 2 hours until meat is tender. Remove bones and shred meat back into the pot.", "Add potatoes, carrots, corn, lima beans, and tomatoes.", "Simmer another 45 minutes until everything is very tender and stew is thick.", "Season generously with salt, black pepper, and cayenne.", "Serve in deep bowls with cornbread."]
    },
    {
      name: "Tyler Pudding Pie",
      number: 10, years: "1841–1845",
      presidentName: "John Tyler",
      dishName: "Tyler's Pudding Pie",
      type: "Dessert",
      servings: 8,
      difficulty: 2,
      description: "Tyler's Pudding Pie — a rich egg custard with raisins, currants, and warm spices baked in a pastry shell — was the White House dessert most associated with the Tyler administration. Thicker and more substantial than a simple custard pie, it is closer to a steamed pudding inside a crust.",
      region: "Sherwood Forest, Virginia",
      notable: "Tyler's Pudding Pie appears in multiple 19th-century Virginia cookbooks and is one of the few presidential dishes documented by name in period cooking records rather than just remembered by contemporaries.",
      ingredients: ["1 unbaked 9-inch pie shell", "3 eggs", "1 cup sugar", "½ cup butter, melted", "1 cup whole milk", "½ cup raisins", "¼ cup dried currants", "1 tsp vanilla", "1 tsp cinnamon", "½ tsp ginger", "¼ tsp allspice", "Pinch nutmeg"],
      instructions: ["Preheat oven to 325°F.", "Beat eggs and sugar together until smooth.", "Add melted butter, milk, vanilla, and spices. Mix well.", "Stir in raisins and currants.", "Pour into unbaked pie shell.", "Bake 45-55 minutes until filling is set and top is golden — it should wobble only slightly in the very center.", "Cool completely before slicing. The filling firms as it cools.", "Best served at room temperature."]
    },
    {
      name: "Polk Corn Pone",
      number: 11, years: "1845–1849",
      presidentName: "James K. Polk",
      dishName: "Corn Pone",
      type: "Side",
      servings: 8,
      difficulty: 1,
      description: "Corn pone was Polk's everyday bread — the most austere cornbread, made without eggs or milk, exactly as eaten in the rural South and Appalachia. This recipe is already in the 1930s section of this collection, where it appears as Depression-era cooking. Polk ate it in the White House by choice.",
      region: "Columbia, Tennessee; North Carolina backcountry",
      notable: "Corn pone was the bread of working people — sharecroppers, soldiers, laborers — and the fact that the President of the United States requested it over the French-influenced cooking fashionable in Washington says a great deal about Polk.",
      ingredients: ["2 cups white cornmeal", "1 tsp salt", "1 tbsp lard or bacon drippings", "¾ cup boiling water (approximately)"],
      instructions: ["Mix cornmeal and salt. Rub in lard until crumbly.", "Add boiling water gradually, just enough to make a stiff dough that holds its shape.", "Shape into oval patties by hand — they should be about ¾ inch thick.", "Place on a greased cast iron griddle or baking sheet.", "Bake at 450°F for 20-25 minutes until edges are crisp and golden, or pan-fry in hot fat, 4 minutes per side.", "Serve hot. Corn pone is best eaten immediately."]
    },
    {
      name: "Taylor Calas",
      number: 12, years: "1849–1850",
      presidentName: "Zachary Taylor",
      dishName: "New Orleans Calas (Creole Rice Fritters)",
      type: "Breakfast/Dessert",
      servings: 12,
      difficulty: 3,
      description: "Calas were sweet fried rice fritters sold by street vendors in New Orleans, eaten hot in the mornings with café au lait. Taylor fell in love with them during his years stationed in Louisiana. They are one of the oldest African-Creole dishes in American culinary history.",
      region: "New Orleans, Louisiana",
      notable: "Calas were historically sold by free Black women in New Orleans who called out 'Belle calas! Tout chauds!' ('Beautiful calas! Very hot!') on the streets of the French Quarter. The money some women earned from selling calas was used to buy their families' freedom from slavery.",
      ingredients: ["1 cup cooked white rice, slightly warm", "1½ tsp active dry yeast", "¼ cup warm water", "3 eggs, beaten", "¼ cup sugar", "½ tsp vanilla", "½ tsp cinnamon", "¼ tsp nutmeg", "1 cup flour", "Pinch salt", "Oil for frying", "Powdered sugar to serve"],
      instructions: ["Dissolve yeast in warm water. Let stand 5 minutes until foamy.", "Mash rice slightly so some grains are broken but texture remains.", "Mix yeast, eggs, sugar, vanilla, cinnamon, and nutmeg into the rice.", "Stir in flour and salt until a thick batter forms.", "Cover and let rise in a warm place for 1 hour.", "Heat 2 inches of oil to 375°F.", "Drop batter by rounded tablespoons into hot oil.", "Fry 2-3 minutes per side until deep golden brown.", "Drain on paper towels. Dust generously with powdered sugar.", "Eat immediately, very hot, with café au lait."]
    },
    {
      name: "Fillmore Mock Turtle Soup",
      number: 13, years: "1850–1853",
      presidentName: "Millard Fillmore",
      dishName: "Mock Turtle Soup",
      type: "Soup",
      servings: 6,
      difficulty: 3,
      description: "Mock turtle soup — made from calf's head to simulate the expensive green turtle soup fashionable in the 19th century — was a White House staple under Fillmore. Lewis Carroll's Mock Turtle in Alice in Wonderland is a direct reference to this dish and the absurdity of pretending cheap meat was luxury food.",
      region: "Buffalo, New York; nationwide in the 19th century",
      notable: "Lewis Carroll's weeping Mock Turtle in Alice in Wonderland (1865) — who was 'once a real Turtle' — is a direct parody of mock turtle soup, which Carroll considered a rather sad imitation of something better.",
      ingredients: ["2 lbs calf's head meat (or veal shanks as substitute)", "1 onion, quartered", "3 stalks celery", "2 bay leaves", "6 peppercorns", "4 tbsp butter", "4 tbsp flour", "2 hard-boiled eggs, sliced", "¼ cup dry sherry", "1 lemon, sliced", "Salt, cayenne", "Fresh parsley"],
      instructions: ["Simmer calf's head or veal shanks in water with onion, celery, bay leaves, and peppercorns for 2-3 hours.", "Remove meat; strain and reserve broth. Pick meat from bones and set aside.", "Melt butter in a pot; whisk in flour and cook until golden brown.", "Add strained broth gradually, whisking until smooth. Simmer 20 minutes.", "Add sherry and reserved meat. Season with salt and cayenne.", "Serve in deep bowls. Garnish with sliced hard-boiled egg, a slice of lemon, and parsley.", "This was genuinely considered an elegant soup in 1850."]
    },
    {
      name: "Pierce Fried Clams",
      number: 14, years: "1853–1857",
      presidentName: "Franklin Pierce",
      dishName: "New Hampshire Fried Clams",
      type: "Main",
      servings: 4,
      difficulty: 2,
      description: "Pierce was a New Hampshire native who never lost his taste for the foods of the New England seacoast. Fried clams — dredged in seasoned cornmeal and fried crisp — were his comfort food, eaten since childhood. This is the classic New England preparation.",
      region: "Concord, New Hampshire; the New England seacoast",
      notable: "The fried clam as we know it today was codified around 1916 when Lawrence 'Chubby' Woodman of Essex, Massachusetts began frying whole soft-shell clams. Pierce ate an earlier version — clams dredged in cornmeal and pan-fried — that was a standard New England coastal dish from the colonial era.",
      ingredients: ["2 lbs fresh soft-shell (belly) clams or littlenecks, shucked", "1 cup buttermilk", "1 cup cornmeal", "½ cup flour", "1 tsp salt", "½ tsp black pepper", "½ tsp cayenne", "Oil for frying", "Lemon wedges and tartar sauce to serve"],
      instructions: ["Soak shucked clams in buttermilk for 30 minutes.", "Mix cornmeal, flour, salt, pepper, and cayenne in a shallow bowl.", "Heat 2 inches of oil to 375°F in a heavy pot.", "Drain clams from buttermilk. Dredge in cornmeal mixture, shaking off excess.", "Fry in batches — do not crowd — for 1-2 minutes until golden and crisp.", "Drain on paper towels. Season immediately with salt.", "Serve very hot with lemon wedges and tartar sauce.", "Do not let them sit — fried clams must be eaten immediately."]
    },
    {
      name: "Buchanan Turtle Soup",
      number: 15, years: "1857–1861",
      presidentName: "James Buchanan",
      dishName: "Green Turtle Soup",
      type: "Soup",
      servings: 6,
      difficulty: 3,
      description: "Green turtle soup was the most prestigious dish in 19th-century American fine dining — expensive, labor-intensive, and served only at the finest tables. Buchanan's fondness for it reflected his surprisingly sophisticated palate. This period recipe uses the traditional preparation.",
      region: "Philadelphia, Pennsylvania; Baltimore, Maryland",
      notable: "Green turtle soup was so fashionable in the 19th century that sea turtle populations in the Caribbean were nearly wiped out to supply East Coast restaurants and dinner tables. It has since been made illegal. This recipe uses veal as a substitute.",
      ingredients: ["2 lbs veal breast or shanks (traditional substitute)", "1 onion, diced", "2 stalks celery", "2 tbsp butter", "2 tbsp flour", "½ cup dry sherry", "1 lemon, sliced", "2 hard-boiled eggs, chopped", "1 tsp Worcestershire sauce", "Salt, cayenne, nutmeg", "Fresh parsley"],
      instructions: ["Simmer veal in 6 cups water with onion and celery for 1½ hours until very tender.", "Remove meat, shred finely, set aside. Strain and reserve broth.", "Melt butter in a pot, whisk in flour, cook until golden.", "Add strained broth gradually, whisking smooth. Simmer 15 minutes.", "Add sherry, Worcestershire, and shredded veal.", "Season with salt, cayenne, and a pinch of nutmeg.", "Serve in cups. Garnish with chopped hard-boiled egg, a slice of lemon, and parsley.", "This was served at the best dining tables in America for over a century."]
    },
    {
      name: "Lincoln Chicken Fricassee",
      number: 16, years: "1861–1865",
      presidentName: "Abraham Lincoln",
      dishName: "Chicken Fricassee with Biscuits",
      type: "Main",
      servings: 4,
      difficulty: 3,
      description: "Lincoln's favorite meal — chicken braised in a cream sauce with herbs, served with biscuits. This dish is also in the 1910s section of this collection. Lincoln requested it frequently at the White House, and it was the dish most associated with his mother's cooking from his Indiana childhood.",
      region: "Springfield, Illinois; New Salem, Illinois",
      notable: "Lincoln's law partner William Herndon documented that chicken fricassee was Lincoln's favorite meal. The dish connects directly to the poverty of his Indiana childhood — chicken was the one meat most farm families could reliably afford.",
      ingredients: ["1 whole chicken, cut into 8 pieces", "Salt and pepper", "3 tbsp butter", "1 onion, diced", "2 stalks celery, diced", "3 tbsp flour", "2 cups chicken broth", "1 cup heavy cream", "Fresh thyme and parsley", "For biscuits: 2 cups flour", "1 tbsp baking powder", "½ tsp salt", "6 tbsp cold butter", "¾ cup cold milk"],
      instructions: ["Season chicken pieces generously with salt and pepper.", "Brown in butter in a heavy pot, skin side down first. Remove.", "Sauté onion and celery until soft. Stir in flour and cook 1 minute.", "Add broth gradually, whisking smooth. Return chicken to pot.", "Tuck in thyme. Cover and simmer gently 35-40 minutes until chicken is cooked through.", "Remove chicken. Stir in cream. Simmer sauce to desired consistency. Season.", "BISCUITS: Cut cold butter into flour, baking powder, and salt until crumbly. Add milk, mix until just combined. Pat out and cut.", "Bake biscuits at 450°F for 12-14 minutes until golden.", "Serve chicken and sauce in a deep dish. Lay biscuits alongside."]
    },
    {
      name: "Lincoln Gingerbread",
      number: 16, years: "1861–1865",
      presidentName: "Abraham Lincoln",
      dishName: "Lincoln's Gingerbread Cookies",
      type: "Dessert",
      servings: 36,
      difficulty: 2,
      description: "Lincoln's mother Nancy Hanks baked gingerbread cookies throughout his Indiana childhood, and he retained his love of them his entire life. He kept gingerbread in the White House and was known to eat it absentmindedly while working. His stepmother Sarah also made them.",
      region: "Indiana; Springfield, Illinois",
      notable: "Lincoln's law partner Herndon wrote that Lincoln had 'simple, frontier tastes' in food and that gingerbread cookies were one of the few sweets he genuinely sought out. He ate them as a child and as president without any apparent embarrassment about the association.",
      ingredients: ["2½ cups flour", "1½ tsp baking soda", "2 tsp ground ginger", "1 tsp cinnamon", "½ tsp cloves", "½ tsp black pepper (the 19th-century version had more spice)", "½ cup lard or butter", "½ cup brown sugar", "½ cup molasses", "1 egg"],
      instructions: ["Cream lard and sugar together until smooth.", "Beat in molasses and egg.", "Sift together flour, baking soda, ginger, cinnamon, cloves, and pepper.", "Stir dry ingredients into wet until a stiff dough forms.", "Wrap and refrigerate at least 1 hour.", "Preheat oven to 350°F.", "Roll dough ¼ inch thick on a floured surface.", "Cut into simple shapes — rounds or rectangles, as would have been typical.", "Bake 10-12 minutes until firm. Do not overbake — they should be firm, not hard.", "Cool on a rack. They will firm further as they cool."]
    },
    {
      name: "Johnson Hoppin John",
      number: 17, years: "1865–1869",
      presidentName: "Andrew Johnson",
      dishName: "Hoppin' John",
      type: "Main",
      servings: 8,
      difficulty: 2,
      description: "Hoppin' John — black-eyed peas cooked with rice, bacon, and onion — was Johnson's comfort food and a dish deeply embedded in the culture of Tennessee and the broader South, eaten on New Year's Day for good luck and throughout the year as everyday sustenance.",
      region: "Greeneville, Tennessee; the American South",
      notable: "Hoppin' John has West African roots, brought to the American South by enslaved people who had grown field peas and rice in their home regions. It became a cornerstone of Southern foodways across racial lines and is still eaten on New Year's Day across the South for good luck.",
      ingredients: ["1 lb dried black-eyed peas", "½ lb thick bacon or salt pork, diced", "1 large onion, diced", "3 cloves garlic, minced", "1 bay leaf", "Salt, black pepper, red pepper flakes", "2 cups long-grain white rice"],
      instructions: ["Soak black-eyed peas in cold water overnight. Drain.", "Cook bacon in a heavy pot until fat is rendered. Remove bacon.", "Cook onion and garlic in bacon fat until soft.", "Add drained peas, bay leaf, and enough water to cover by 2 inches.", "Bring to a boil, then simmer 45-60 minutes until peas are tender but not mushy.", "Season with salt, pepper, and red pepper flakes.", "Cook rice separately. Return bacon to the peas.", "Serve peas ladled over rice, with the pot liquor spooned over the top."]
    },
    {
      name: "Grant Rice Pudding",
      number: 18, years: "1869–1877",
      presidentName: "Ulysses S. Grant",
      dishName: "Lemon Rice Pudding",
      type: "Dessert",
      servings: 4,
      difficulty: 2,
      description: "Lemon-flavored rice pudding was Grant's great comfort food — reportedly eaten during the darkest stretches of the Civil War to steady his nerves. Simple, sweet, and deeply old-fashioned even by the standards of his era.",
      region: "Galena, Illinois; New York",
      notable: "Grant's chief of staff documented that the general-turned-president regularly requested rice pudding during difficult periods, including the night before major Civil War engagements. It was his anxiety food.",
      ingredients: ["½ cup long-grain white rice", "4 cups whole milk", "⅓ cup sugar", "Zest of 1 lemon", "2 tbsp lemon juice", "2 egg yolks", "2 tbsp butter", "1 tsp vanilla", "Pinch nutmeg and salt"],
      instructions: ["Combine rice and milk in a heavy-bottomed saucepan. Bring to a simmer over medium heat.", "Cook, stirring frequently, for 30-35 minutes until rice is very soft and mixture has thickened considerably.", "Stir in sugar, lemon zest, and salt.", "Beat egg yolks and stir a spoonful of hot pudding into them (tempering), then pour back into pot.", "Stir constantly over low heat 3-4 more minutes. Do not boil.", "Remove from heat. Stir in butter, vanilla, and lemon juice.", "Serve warm or chilled. Dust with nutmeg.", "The pudding thickens considerably as it cools."]
    },
    {
      name: "Hayes Cornmeal Pancakes",
      number: 19, years: "1877–1881",
      presidentName: "Rutherford B. Hayes",
      dishName: "Cornmeal Battercakes with Maple Syrup",
      type: "Side",
      servings: 4,
      difficulty: 1,
      description: "Hayes was a breakfast president — cornmeal battercakes with maple syrup were his daily ritual. Thinner and crispier than modern pancakes, with a distinctly savory cornmeal base that contrasts beautifully with real maple syrup.",
      region: "Fremont, Ohio",
      notable: "Hayes and his wife Lucy — nicknamed 'Lemonade Lucy' for banning alcohol from the White House — ran a resolutely plain and wholesome household. No wine at state dinners, but excellent cornmeal pancakes every morning.",
      ingredients: ["1 cup white cornmeal", "½ cup flour", "1 tsp baking powder", "½ tsp salt", "1 tbsp sugar", "1 egg, beaten", "1¼ cups buttermilk", "2 tbsp butter, melted", "Butter and real maple syrup to serve"],
      instructions: ["Mix cornmeal, flour, baking powder, salt, and sugar.", "Whisk egg, buttermilk, and melted butter together.", "Combine wet and dry ingredients until just mixed — lumps are fine.", "Heat a cast iron griddle over medium heat. Grease with butter.", "Pour batter in ¼-cup portions.", "Cook until bubbles appear on the surface and edges look set, about 2-3 minutes.", "Flip and cook another 1-2 minutes.", "Serve in stacks with a generous pour of real maple syrup and more butter."]
    },
    {
      name: "Garfield Squirrel Soup",
      number: 20, years: "1881",
      presidentName: "James A. Garfield",
      dishName: "Squirrel Soup",
      type: "Soup",
      servings: 4,
      difficulty: 2,
      description: "Squirrel soup was a frontier staple Garfield shared with two other presidents (Harrison, Roosevelt). This thick, hearty soup uses squirrel (or rabbit) as its base, with root vegetables and a thickened broth that was pure Midwestern farm cooking.",
      region: "Mentor, Ohio; the Midwest frontier",
      notable: "Garfield served only 200 days in office before being shot. He lingered for 79 days after the assassination — not from the bullet itself but from the infections introduced by doctors who probed the wound with unwashed fingers and bare hands. Alexander Graham Bell tried and failed to locate the bullet with a metal detector.",
      ingredients: ["2 squirrels, dressed and cut into pieces (or 1 rabbit, or 2 lbs chicken thighs)", "1 large onion, diced", "3 carrots, sliced", "3 stalks celery, sliced", "2 large potatoes, cubed", "3 tbsp butter", "3 tbsp flour", "Salt, black pepper", "Fresh thyme and parsley"],
      instructions: ["Brown squirrel pieces in butter in a heavy pot over medium-high heat.", "Remove squirrel. Cook onion, carrots, and celery in same pot until soft.", "Return squirrel. Cover with water by 2 inches. Add thyme.", "Simmer 1½-2 hours until meat falls from bones.", "Remove squirrel; pick meat from bones. Return meat to pot.", "Mix flour with cold water to a smooth paste. Stir into simmering soup.", "Add potatoes. Cook another 20 minutes until potatoes are tender and soup is thickened.", "Season generously with salt and pepper. Finish with fresh parsley."]
    },
    {
      name: "Arthur Mutton Chops",
      number: 21, years: "1881–1885",
      presidentName: "Chester A. Arthur",
      dishName: "Broiled Mutton Chops",
      type: "Main",
      servings: 4,
      difficulty: 3,
      description: "Arthur was the most fashionable eater to occupy the White House. He refused to eat before 9pm, hired a French chef, and served elaborate 14-course dinners. His personal favorite — broiled mutton chops — was the classic Victorian gentleman's supper: dark, gamey, rich, served with a sharp caper sauce.",
      region: "New York City",
      notable: "Arthur had 24 wagonloads of White House furniture sold at public auction when he moved in because he considered it beneath his standards, then hired Louis Comfort Tiffany to redecorate. He owned 80 pairs of trousers. He was, in short, a particular kind of man.",
      ingredients: ["4 thick-cut mutton or lamb loin chops", "Salt and coarse black pepper", "2 tbsp butter", "CAPER SAUCE: 2 tbsp butter", "1 shallot, minced", "1 tbsp flour", "1 cup beef or lamb broth", "2 tbsp capers, drained", "1 tsp red wine vinegar", "1 tsp Worcestershire sauce"],
      instructions: ["Season chops generously with salt and pepper. Let come to room temperature.", "Heat a cast iron skillet or grill pan until very hot.", "Cook chops 4-5 minutes per side for medium-rare (lamb) or 5-6 for medium.", "Rest 5 minutes.", "CAPER SAUCE: Melt butter in a small saucepan. Cook shallot until soft.", "Stir in flour, then add broth gradually. Simmer until smooth and slightly thick.", "Add capers, vinegar, and Worcestershire. Season.", "Serve chops immediately with caper sauce alongside."]
    },
    {
      name: "Cleveland Pickled Herring",
      number: "22 & 24", years: "1885–1889 & 1893–1897",
      presidentName: "Grover Cleveland",
      dishName: "Pickled Herring with Sour Cream",
      type: "Appetizer",
      servings: 8,
      difficulty: 3,
      description: "Cleveland resisted the elaborate French cooking fashionable in his era and preferred simple, briny, working-class foods. Pickled herring — his personal favorite — was a staple of New York markets and a completely unprestigious choice for a sitting president, which was rather the point.",
      region: "Buffalo, New York",
      notable: "Cleveland was known to raid the White House icebox himself at night rather than wake kitchen staff. He was the only president to serve two non-consecutive terms and also secretly had cancer surgery on a yacht in Long Island Sound in 1893, concealing it from the public for over 20 years.",
      ingredients: ["2 lbs fresh herring fillets (or 2 jars prepared salt herring, rinsed)", "BRINE: 1 cup white wine vinegar", "1 cup water", "¼ cup sugar", "1 tbsp pickling spice", "1 bay leaf", "1 onion, thinly sliced", "TO SERVE: 1 cup sour cream", "1 small onion, minced", "Fresh dill"],
      instructions: ["If using fresh herring: salt fillets generously and refrigerate 24 hours. Rinse thoroughly.", "Cut herring into 1-inch pieces.", "Bring brine ingredients (vinegar, water, sugar, pickling spice, bay leaf) to a boil. Cool.", "Layer herring and sliced onion in a glass jar.", "Pour cooled brine over. Add more onion.", "Refrigerate at least 3 days before eating — a week is better.", "TO SERVE: Drain herring. Mix sour cream with minced onion and fresh dill.", "Arrange herring on a plate. Top with sour cream mixture. Serve with dark bread."]
    },
    {
      name: "Harrison Opossum",
      number: 23, years: "1889–1893",
      presidentName: "Benjamin Harrison",
      dishName: "Roast Opossum with Sweet Potatoes",
      type: "Main",
      servings: 6,
      difficulty: 3,
      description: "Harrison was served a roasted opossum at a Tennessee banquet and reportedly enjoyed it. Opossum with sweet potatoes was a traditional Southern and Appalachian combination — the rich, gamey meat paired with the sweetness of the potatoes. It was considered a delicacy in parts of the South.",
      region: "Indianapolis, Indiana; the American South",
      notable: "Opossum dinners were a genuine social tradition in parts of the South well into the 20th century. President Taft was also served roast opossum — it seems to have been a Southern political tradition to serve the dish to visiting presidents.",
      ingredients: ["1 opossum, dressed (or substitute: pork shoulder, 3-4 lbs)", "Salt, black pepper, cayenne", "1 onion, quartered", "2 cloves garlic", "Fresh sage and thyme", "3 sweet potatoes, peeled and halved", "2 tbsp brown sugar", "2 tbsp butter"],
      instructions: ["If using opossum: soak overnight in salted water with a splash of vinegar to mild the gamey flavor. Rinse well.", "Rub animal generously with salt, pepper, and cayenne. Stuff cavity with onion, garlic, and herbs.", "Place in a roasting pan with ½ cup water. Cover and roast at 325°F for 2 hours.", "Uncover. Arrange sweet potato halves around the meat. Dot with butter and brown sugar.", "Roast uncovered another 30-45 minutes until skin is crispy and sweet potatoes are caramelized.", "Serve from the pan at the table, as was traditional.", "Substitute pork shoulder uses exactly the same method and timing."]
    },
    {
      name: "McKinley Pickled Oysters",
      number: 25, years: "1897–1901",
      presidentName: "William McKinley",
      dishName: "Pickled Oysters",
      type: "Appetizer",
      servings: 6,
      difficulty: 3,
      description: "Pickled oysters were McKinley's favorite indulgence — a once-common 19th-century preservation method that produced a tangy, briny condiment served on crackers or bread. Before refrigeration, pickling was the only way to enjoy oysters away from the coast.",
      region: "Canton, Ohio",
      notable: "McKinley always wore a red carnation in his lapel for good luck. On the day he was assassinated at the Pan-American Exposition in Buffalo in 1901, he gave his carnation to a young girl in the receiving line moments before being shot. He died eight days later.",
      ingredients: ["2 dozen fresh oysters, shucked, liquor reserved", "1 cup white wine vinegar", "½ cup oyster liquor", "1 tsp pickling spice", "½ tsp celery seed", "¼ tsp cayenne", "1 bay leaf", "1 tsp salt"],
      instructions: ["Poach shucked oysters in their liquor over medium heat just until edges curl, about 2 minutes.", "Remove oysters with a slotted spoon. Reserve poaching liquor.", "Combine vinegar, reserved oyster liquor, pickling spice, celery seed, cayenne, bay leaf, and salt in a saucepan.", "Bring to a boil. Simmer 5 minutes.", "Place oysters in a clean glass jar.", "Pour hot brine over oysters. Cool to room temperature.", "Refrigerate at least 24 hours before serving.", "Serve on crackers with a drop of hot sauce."]
    },
    {
      name: "Roosevelt Game Stew",
      number: 26, years: "1901–1909",
      presidentName: "Theodore Roosevelt",
      dishName: "Rough Rider Game Stew",
      type: "Main",
      servings: 6,
      difficulty: 3,
      description: "Roosevelt ate game meats with the same ferocious energy he brought to everything else. This is a period-accurate preparation of the kind of mixed game stew he would have eaten on hunting expeditions in the Badlands and at his Oyster Bay estate — venison or elk, braised with root vegetables in a dark, robust broth.",
      region: "Oyster Bay, New York; the Badlands, North Dakota",
      notable: "Roosevelt's son Kermit noted that his father ate so fast that meals were usually finished before guests had completed their first course. TR consumed a gallon of coffee a day with extraordinary quantities of sugar and considered sitting still at a dining table a form of punishment.",
      ingredients: ["2 lbs venison shoulder or elk (beef chuck as substitute), cubed", "4 strips thick bacon, chopped", "2 onions, chopped", "3 carrots, chopped", "3 parsnips, chopped", "2 cloves garlic", "2 cups red wine", "2 cups game or beef broth", "1 tbsp tomato paste", "Fresh thyme, rosemary, bay leaves", "Salt, black pepper", "Flour for dredging"],
      instructions: ["Toss venison cubes in seasoned flour.", "Cook bacon in a Dutch oven until fat renders. Remove bacon.", "Brown venison in batches in bacon fat over high heat. Remove.", "Cook onions, carrots, parsnips, and garlic until softened.", "Return venison and bacon. Add wine and let it bubble 2 minutes.", "Add broth, tomato paste, and herbs.", "Cover and braise at 325°F for 2½-3 hours until very tender.", "Adjust sauce consistency — simmer uncovered if too thin.", "Season and serve over mashed potatoes or with crusty bread."]
    },
    {
      name: "Taft Breakfast Steak",
      number: 27, years: "1909–1913",
      presidentName: "William Howard Taft",
      dishName: "Taft's Breakfast Beefsteak",
      type: "Breakfast/Main",
      servings: 1,
      difficulty: 1,
      description: "Taft's White House housekeeper Elizabeth Jaffray documented his habit of eating a 12-ounce steak every single morning for breakfast — eventually reduced to 6 ounces on doctor's orders. This is the preparation: broiled over a clear fire, spread with butter, seasoned simply. It was his first meal of what was an extraordinary daily caloric intake.",
      region: "Cincinnati, Ohio",
      notable: "Elizabeth Jaffray's memoir records that even after adopting his reduced 6-ounce steak diet, 'somehow he really didn't take off any great amount of weight.' The White House kitchen ordered provisions in staggering quantities — barrels of potatoes, enormous butter tubs — much of which went to Taft's personal consumption.",
      ingredients: ["1 well-marbled sirloin or ribeye steak, 10-12 oz, 1¼ inches thick", "Kosher salt and coarse black pepper", "1 tbsp butter, softened", "Optional: a small glass of orange juice and waffles to complete the presidential breakfast"],
      instructions: ["Remove steak from refrigerator 30 minutes before cooking.", "Season both sides generously with salt and pepper.", "Heat a cast iron skillet or broiler until very hot — smoking hot.", "For broiling (as Jaffray describes): place on a broiler rack 3 inches from the flame. Broil 4-5 minutes per side for medium.", "For pan: cook 3-4 minutes per side without moving for a proper crust.", "Spread softened butter over steak immediately after removing from heat.", "Rest 5 minutes.", "Eat at 7am. Then eat again at lunch. And dinner. This was Taft's life."]
    },
  ],
  "1910s": [
    {
      name: "Wilson Virginia Ham",
      number: 28, years: "1913–1921",
      presidentName: "Woodrow Wilson",
      dishName: "Wilson's Virginia Country Ham",
      type: "Main",
      servings: 12,
      difficulty: 4,
      description: "Virginia country ham was Wilson's most consistent food preference — documented by multiple White House staff as the one food he reliably sought out. Like Madison before him, he was a Virginian who never left Virginia's food traditions behind. The preparation is identical to Madison's Virginia Ham recipe.",
      region: "Staunton, Virginia; Princeton, New Jersey",
      notable: "Wilson's doctor put him on an extremely restricted diet after his devastating 1919 stroke. Virginia ham was reportedly one of the few foods his doctor permitted him in limited quantities — suggesting it was genuinely his favorite rather than a diplomatic affectation.",
      ingredients: ["See Virginia Country Ham recipe under James Madison — the preparation is identical", "Wilson preferred his sliced paper-thin", "Served with beaten biscuits (see Beaten Biscuits in this collection)"],
      instructions: ["Follow the Virginia Country Ham recipe exactly as listed under James Madison.", "Slice the finished ham paper-thin — thinner than you think is necessary.", "Serve at room temperature on beaten biscuits or thin white bread.", "This is how it was eaten in Virginia, and Wilson never deviated from tradition."]
    },
    {
      name: "Wilson Strawberry Ice Cream",
      number: 28, years: "1913–1921",
      presidentName: "Woodrow Wilson",
      dishName: "Wilson's Strawberry Ice Cream",
      type: "Dessert",
      servings: 8,
      difficulty: 4,
      description: "Strawberry ice cream was Wilson's consistent dessert request throughout his presidency. He was an unenthusiastic eater generally — often forgetting meals entirely — but he reliably found time for strawberry ice cream. The recipe is the same as Dolley Madison's version.",
      region: "Washington D.C.",
      notable: "Wilson was so disengaged from food that his White House housekeeper noted he had to be reminded to eat. The sole exception was strawberry ice cream, which he requested without being asked.",
      ingredients: ["See Dolley Madison's Strawberry Ice Cream recipe — Wilson's version was identical", "Fresh strawberries were preferred when in season"],
      instructions: ["Follow the Dolley Madison Strawberry Ice Cream recipe exactly.", "Wilson preferred his served in a glass coupe rather than a bowl.", "No additional notes — this was a simple, unmodified strawberry ice cream."]
    },
  ],
  "1920s": [
    {
      name: "Harding Chicken Pot Pie",
      number: 29, years: "1921–1923",
      presidentName: "Warren G. Harding",
      dishName: "Florence Harding's Chicken Pot Pie",
      type: "Main",
      servings: 8,
      difficulty: 4,
      description: "Florence Harding's chicken pot pie recipe was documented in the Presidents' Cookbook — she brought it from Marion, Ohio to the White House and it was served regularly. A proper old-fashioned pot pie with a full pastry crust top and bottom, rich with cream and vegetables.",
      region: "Marion, Ohio",
      notable: "Harding's presidency was consumed by scandal — the Teapot Dome affair, corruption throughout his cabinet — but Florence Harding ran the White House with iron efficiency and kept the kitchen in good order. She died the year after Warren did.",
      ingredients: ["1 whole chicken, simmered and meat picked (about 3 cups cooked chicken)", "3 cups chicken broth", "4 tbsp butter", "1 onion, diced", "3 carrots, diced", "3 stalks celery, diced", "1 cup frozen peas", "4 tbsp flour", "1 cup heavy cream", "Salt, white pepper, fresh thyme", "CRUST: 2½ cups flour", "1 tsp salt", "1 cup cold lard or butter", "6-8 tbsp ice water"],
      instructions: ["Make crust: cut fat into flour and salt until crumbly. Add ice water gradually until dough forms. Divide in half. Chill 30 minutes.", "Melt butter in a deep skillet. Cook onion, carrot, and celery until soft.", "Stir in flour and cook 1 minute.", "Add broth gradually, whisking smooth. Add cream. Simmer until thick.", "Fold in chicken, peas, and thyme. Season well.", "Roll out half the pastry and line a deep 9-inch pie dish.", "Fill with chicken mixture. Roll remaining pastry for lid.", "Seal edges, crimp, and cut vents.", "Brush with egg wash.", "Bake at 400°F for 40-45 minutes until deep golden and bubbling at the vents."]
    },
    {
      name: "Coolidge Pork Apple Pie",
      number: 30, years: "1923–1929",
      presidentName: "Calvin Coolidge",
      dishName: "Vermont Pork Apple Pie",
      type: "Dessert",
      servings: 8,
      difficulty: 3,
      description: "Coolidge claimed this was the best thing he had ever eaten — his mother's pork apple pie, a Vermont farmhouse tradition that combines salt pork with apples in a pastry shell. The savory-sweet combination is genuinely extraordinary and makes perfect sense once you consider how well apples and pork complement each other.",
      region: "Plymouth Notch, Vermont",
      notable: "Coolidge was so devoted to Vermont that he was sworn in as president by his own father — a notary public — at the family farmhouse in Plymouth Notch at 2:47am after receiving news of Harding's death. He was eating his mother's cooking again within the week.",
      ingredients: ["FILLING: ½ lb salt pork, thinly sliced", "4 large tart apples (Granny Smith or similar), peeled and thinly sliced", "¾ cup brown sugar", "1 tsp cinnamon", "¼ tsp nutmeg", "2 tbsp flour", "CRUST: 2½ cups flour", "1 tsp salt", "1 cup cold lard (or butter)", "6-8 tbsp ice water"],
      instructions: ["Make pie crust: cut lard into flour and salt until crumbly. Add ice water until dough comes together. Divide, wrap, refrigerate 30 minutes.", "Blanch salt pork slices in boiling water 5 minutes to remove excess salt. Drain and pat dry.", "Toss apple slices with brown sugar, cinnamon, nutmeg, and flour.", "Roll out one pastry disk and line a 9-inch pie plate.", "Layer sliced salt pork alternately with apple mixture.", "Cover with second pastry disk. Seal, crimp, and cut vents.", "Brush with milk. Sprinkle with sugar.", "Bake at 425°F for 15 minutes, then reduce to 350°F for 35-40 minutes.", "Cool at least 1 hour. The savory-sweet combination is remarkable."]
    },
    {
      name: "Coolidge Jelly Roll",
      number: 30, years: "1923–1929",
      presidentName: "Calvin Coolidge",
      dishName: "Strawberry Jelly Roll with Lemon Icing",
      type: "Dessert",
      servings: 10,
      difficulty: 4,
      description: "The White House chef Ling P. Quan revealed in 1925 that Coolidge's favorite dessert was a jelly roll filled with strawberry jam or currant jelly and covered with lemon icing — an old-fashioned New England dessert that was considered quite plain even for the 1920s.",
      region: "Plymouth Notch, Vermont",
      notable: "Coolidge's famous silence extended to the dinner table — he ate whatever was served with neither comment nor complaint, except for the jelly roll, which he requested specifically. His wife Grace was reportedly the more adventurous eater of the two.",
      ingredients: ["3 eggs", "1 cup sugar", "⅓ cup water", "1 tsp vanilla", "1 cup cake flour", "1 tsp baking powder", "¼ tsp salt", "Powdered sugar for rolling", "¾ cup strawberry jam", "LEMON ICING: 1 cup powdered sugar", "2-3 tbsp lemon juice", "1 tsp lemon zest"],
      instructions: ["Preheat oven to 375°F. Line a 10x15 jelly roll pan with parchment. Grease and flour.", "Beat eggs and sugar on high speed for 5 minutes until pale and thick.", "Beat in water and vanilla.", "Fold in flour, baking powder, and salt until just combined.", "Spread evenly in prepared pan.", "Bake 12-15 minutes until cake springs back when touched.", "Immediately turn out onto a clean kitchen towel dusted with powdered sugar.", "Peel off parchment. Roll cake up in the towel from the short end. Cool completely.", "Unroll carefully. Spread with strawberry jam. Re-roll (without the towel).", "Mix lemon icing ingredients until smooth. Drizzle or spread over the roll.", "Refrigerate 30 minutes before slicing."]
    },
  ],
  "1930s": [
    {
      name: "Hoover Sweet Potatoes",
      number: 31, years: "1929–1933",
      presidentName: "Herbert Hoover",
      dishName: "White House Sweet Potatoes with Marshmallows",
      type: "Side",
      servings: 8,
      difficulty: 1,
      description: "Documented in the National Archives as a White House Thanksgiving tradition under Hoover, this is the dish that codified sweet potatoes with marshmallows as an American Thanksgiving staple. Hoover's cook Mary Rattley prepared it at the White House and the recipe spread into American homes.",
      region: "West Branch, Iowa; Washington D.C.",
      notable: "The combination of sweet potatoes and marshmallows was invented as a promotional recipe by Angelus Marshmallows around 1917 and spread through home economics textbooks. Hoover's White House adoption of it helped cement it as a Thanksgiving tradition — possibly the most consequential presidential food decision in American history.",
      ingredients: ["3 lbs sweet potatoes, peeled and cooked until tender", "4 tbsp butter", "¼ cup orange juice", "2 tbsp brown sugar", "½ tsp cinnamon", "¼ tsp nutmeg", "Salt", "2 cups miniature marshmallows (or large marshmallows, halved)"],
      instructions: ["Preheat oven to 350°F.", "Mash or rice cooked sweet potatoes until smooth.", "Beat in butter, orange juice, brown sugar, cinnamon, nutmeg, and salt.", "Spread in a buttered baking dish.", "Top generously with marshmallows.", "Bake 20-25 minutes until marshmallows are puffed and golden.", "Serve immediately — this dish waits for no one.", "This is the dish that made the marshmallow-sweet potato combination a Thanksgiving institution."]
    },
    {
      name: "FDR Finnan Haddie",
      number: 32, years: "1933–1945",
      presidentName: "Franklin D. Roosevelt",
      dishName: "FDR's Creamed Finnan Haddie",
      type: "Main",
      servings: 4,
      difficulty: 2,
      description: "Creamed finnan haddie — smoked haddock poached in milk and served in a rich cream sauce — was FDR's beloved Sunday breakfast, documented by the FDR Presidential Library. This dish also appears in the 1920s section of this collection. FDR requested it without fail.",
      region: "Hyde Park, New York",
      notable: "The FDR Presidential Library specifically lists creamed finnan haddie as the president's favorite food — one of the more precisely documented presidential food preferences in the historical record.",
      ingredients: ["See Finnan Haddie Cream in the 1920s recipes — FDR's version was identical", "Served over toast or rice", "Sometimes garnished with a sliced hard-boiled egg"],
      instructions: ["Follow the Finnan Haddie Cream recipe exactly as listed in the 1920s section.", "FDR had this every Sunday morning at Hyde Park without exception.", "Serve over thick-cut white toast.", "A hard-boiled egg, halved, was sometimes placed alongside."]
    },
    {
      name: "FDR Grilled Cheese",
      number: 32, years: "1933–1945",
      presidentName: "Franklin D. Roosevelt",
      dishName: "FDR's Grilled Cheese Sandwich",
      type: "Main",
      servings: 1,
      difficulty: 1,
      description: "When eating casually — alone at his desk or with close staff — FDR reliably wanted a grilled cheese sandwich. Simple, unadorned, American. The man who guided the country through the Depression and World War II apparently found grilled cheese comforting, and who could blame him.",
      region: "Hyde Park, New York; Washington D.C.",
      notable: "Eleanor Roosevelt was famously indifferent to food and once served hot dogs to the King and Queen of England (FDR's idea) — a gesture that was either brilliantly democratic or deeply trollish, depending on your perspective. The White House kitchen under FDR reportedly ranged from excellent (state dinners) to terrible (Eleanor's informal suppers).",
      ingredients: ["2 slices good white bread", "2 tbsp butter, softened", "2-3 slices American or sharp cheddar cheese", "Optional: a thin scrape of mustard on the inside"],
      instructions: ["Butter the outside faces of both bread slices generously.", "Place cheese between slices, buttered sides out.", "Heat a cast iron skillet over medium-low heat.", "Place sandwich in pan. Press lightly with a spatula.", "Cook 3-4 minutes until golden brown and cheese begins to melt.", "Flip carefully. Cook another 2-3 minutes until second side is equally golden.", "The heat must be low enough that the bread doesn't burn before the cheese melts.", "Cut diagonally. Eat alone at a desk while running a world war."]
    },
  ],
  "1940s": [
    {
      name: "Truman Fried Chicken",
      number: 33, years: "1945–1953",
      presidentName: "Harry S. Truman",
      dishName: "Missouri Fried Chicken",
      type: "Main",
      servings: 4,
      difficulty: 3,
      description: "Fried chicken was Truman's constant — the Missouri farm food he ate his entire life and requested regularly at the White House. Simple, well-seasoned, fried in lard in a cast iron skillet. This is how it was made in Independence, Missouri in the 1900s-1920s when Truman grew up.",
      region: "Independence, Missouri",
      notable: "Truman once wrote to his wife Bess that he missed 'real fried chicken' — implying that the White House version was never quite right. He preferred his steak cooked completely well-done and his fried chicken fried hard — both of which horrified the White House kitchen.",
      ingredients: ["1 whole chicken, cut into 8 pieces", "2 cups buttermilk", "2 cups flour", "2 tsp salt", "1 tsp black pepper", "1 tsp paprika", "½ tsp garlic powder", "Lard or vegetable shortening for frying (enough for 2 inches in a cast iron skillet)"],
      instructions: ["Soak chicken pieces in buttermilk for at least 2 hours, or overnight refrigerated.", "Mix flour, salt, pepper, paprika, and garlic powder in a shallow bowl.", "Remove chicken from buttermilk, letting excess drip off.", "Dredge in seasoned flour, pressing to adhere. Let sit 15 minutes.", "Heat lard to 325-350°F in a deep cast iron skillet.", "Add chicken skin-side down. Do not crowd.", "Fry dark pieces 13-15 minutes per side; white meat 10-12 minutes per side.", "Chicken should be deep golden brown and cooked through (165°F internal).", "Drain on a rack, not paper towels — keeps the crust crisper."]
    },
    {
      name: "Truman Ozark Pudding",
      number: 33, years: "1945–1953",
      presidentName: "Harry S. Truman",
      dishName: "Ozark Pudding",
      type: "Dessert",
      servings: 6,
      difficulty: 1,
      description: "Ozark pudding — a dense, chewy baked pudding of apples, walnuts, egg, and flour — was Truman's favorite dessert, so famous during his presidency that the White House published the recipe. It is less like a pudding and more like a dense, caramelized apple cake.",
      region: "Independence, Missouri; the Ozark Mountains region",
      notable: "The White House published Truman's Ozark Pudding recipe during his presidency in response to public demand. Margaret Truman later published it in a family cookbook. It is one of the most widely distributed presidential recipes in American history.",
      ingredients: ["1 egg", "¾ cup sugar", "¼ cup flour", "1¼ tsp baking powder", "Pinch salt", "½ cup walnuts, coarsely chopped", "½ cup apple, peeled and finely diced", "1 tsp vanilla", "Whipped cream or vanilla ice cream to serve"],
      instructions: ["Preheat oven to 350°F. Butter an 8-inch baking dish.", "Beat egg and sugar together vigorously until light and thick.", "Stir in flour, baking powder, and salt.", "Fold in walnuts, apple, and vanilla.", "Spread in buttered dish — the batter will be thick.", "Bake 30-35 minutes until top is golden brown and crackled and the edges have pulled from the sides.", "The center will be dense and chewy; the edges crisp.", "Serve warm from the dish with whipped cream or vanilla ice cream.", "This is not a refined dessert. It is an extraordinarily good one."]
    },
  ],
  "1950s": [
    {
      name: "Eisenhower Beef Stew",
      number: 34, years: "1953–1961",
      presidentName: "Dwight D. Eisenhower",
      dishName: "Ike's Old-Fashioned Beef Stew",
      type: "Main",
      servings: 6,
      difficulty: 2,
      description: "Eisenhower was a genuine and accomplished home cook who loved making this beef stew for friends and family at Camp David. His recipe was so well known that he made it available to campaign supporters in 1956. This is his documented recipe — a tomato-based broth with a pinch of cayenne.",
      region: "Abilene, Kansas; Camp David, Maryland",
      notable: "Eisenhower submitted this recipe himself to the Women's National Press Club cookbook. He made it for heads of state at Camp David and considered cooking a genuine hobby, not a performance. He also made his wife Mamie's Million Dollar Fudge frequently.",
      ingredients: ["3 lbs beef chuck, cut in 1½-inch cubes", "Flour for dredging", "3 tbsp vegetable oil", "2 onions, diced", "3 stalks celery, sliced", "3 carrots, cut in chunks", "3 potatoes, cut in chunks", "1 can (14 oz) diced tomatoes", "2 cups beef broth", "1 tsp Worcestershire sauce", "Pinch cayenne pepper (Ike's signature addition)", "Salt, black pepper", "Fresh parsley"],
      instructions: ["Dredge beef cubes in seasoned flour. Brown in batches in hot oil in a Dutch oven. Remove.", "Cook onion and celery in the same pot until soft.", "Return beef. Add tomatoes, broth, Worcestershire, and cayenne.", "Bring to a boil, cover, and simmer gently for 1½ hours.", "Add carrots and potatoes. Continue simmering 45 minutes until vegetables are tender and beef is very soft.", "Taste and adjust seasoning — Ike liked it well-seasoned.", "Serve in deep bowls with plenty of crusty bread.", "The cayenne is the key — don't omit it."]
    },
    {
      name: "Mamie Fudge",
      number: 34, years: "1953–1961",
      presidentName: "Dwight D. Eisenhower",
      dishName: "Mamie's Million Dollar Fudge",
      type: "Dessert",
      servings: 60,
      difficulty: 3,
      description: "Mamie Eisenhower's fudge was Ike's favorite sweet — so good that he nicknamed it 'Million Dollar Fudge' and submitted the recipe to the Women's National Press Club cookbook in 1955. It uses marshmallow creme for a reliably smooth, never-grainy texture.",
      region: "Abilene, Kansas; the White House",
      notable: "Ike submitted this recipe in Mamie's name to the Women's National Press Club cookbook in 1955, writing that it was worth a million dollars. The recipe has been reprinted continuously since then and remains one of the most famous White House recipes ever published.",
      ingredients: ["4½ cups sugar", "Pinch salt", "2 tbsp butter", "1 can (12 oz) evaporated milk", "12 oz semi-sweet chocolate chips", "12 oz German sweet chocolate, broken up", "1 jar (7 oz) marshmallow creme", "2 cups walnuts, chopped", "1 tsp vanilla"],
      instructions: ["Combine sugar, salt, butter, and evaporated milk in a large heavy saucepan.", "Bring to a boil, stirring constantly.", "Boil 6 minutes, stirring the entire time.", "Remove from heat.", "Add both chocolates and marshmallow creme. Stir vigorously until completely melted and smooth.", "Stir in walnuts and vanilla.", "Pour into a buttered 13x9 pan.", "Cool at room temperature until firm — about 3 hours.", "Cut into squares. Store at room temperature.", "Mamie made this in large batches and distributed it as gifts throughout the presidency."]
    },
  ],
  "1960s": [
    {
      name: "Kennedy Clam Chowder",
      number: 35, years: "1961–1963",
      presidentName: "John F. Kennedy",
      dishName: "JFK's New England Clam Chowder",
      type: "Soup",
      servings: 6,
      difficulty: 3,
      description: "The JFK Presidential Library explicitly documents New England clam chowder as Kennedy's favorite food. This is the Massachusetts version — cream-based, potato-thick, intensely clam-flavored — the chowder of his Hyannis Port childhood. It also appears in the 1970s section of this collection.",
      region: "Hyannis Port, Massachusetts; Brookline, Massachusetts",
      notable: "Kennedy was described by the JFK Presidential Library as a 'small eater' who often forgot meals during busy days. When he did eat, he ate New England food. Jackie Kennedy brought French haute cuisine to the White House table; JFK quietly kept requesting chowder.",
      ingredients: ["See New England Clam Chowder in the 1970s recipes — Kennedy's version was the standard Massachusetts preparation", "The key difference was that he preferred a thinner, more broth-forward chowder rather than the thick flour-based diner version"],
      instructions: ["Follow the New England Clam Chowder recipe in the 1970s section.", "For Kennedy's preferred style: use less flour or none at all — rely on the starch from the potatoes for body.", "The chowder should be brothy and intensely clam-flavored, not thick and gluey.", "Fresh clams are essential — canned are acceptable but Kennedy grew up on the real thing."]
    },
    {
      name: "LBJ Pedernales Chili",
      number: 36, years: "1963–1969",
      presidentName: "Lyndon B. Johnson",
      dishName: "LBJ's Pedernales River Chili",
      type: "Main",
      servings: 8,
      difficulty: 1,
      description: "LBJ's own chili recipe — distributed by the thousands in response to public requests, served at White House state dinners, and prepared on the South Lawn at barbecues. No beans. This is the authentic documented recipe from the LBJ Presidential Library.",
      region: "Johnson City, Texas; the LBJ Ranch on the Pedernales River",
      notable: "LBJ distributed this recipe by the thousands — it became one of the most widely circulated presidential recipes in history. He served it at formal state dinners without apology. The LBJ Presidential Library still distributes the recipe on request.",
      ingredients: ["4 lbs beef chuck, coarsely ground or hand-chopped", "1 large onion, diced", "2 cloves garlic, minced", "1 tsp dried oregano", "1 tsp cumin", "2 tbsp chili powder (or more to taste)", "1½ cups canned whole tomatoes, crushed", "2-6 generous dashes liquid hot sauce", "Salt to taste", "NO BEANS"],
      instructions: ["Put meat, onion, and garlic in a large heavy pot over medium heat.", "Cook, stirring occasionally, until meat loses its pink color.", "Stir in all remaining ingredients.", "Bring to a boil. Reduce heat and simmer uncovered for 1 hour.", "Stir occasionally. Skim fat from surface.", "Taste and adjust seasoning — it should be boldly spiced.", "Serve in bowls with no garnish except possibly saltines.", "Do not add beans. Do not add beans. Do not add beans."]
    },
    {
      name: "LBJ Barbecued Ribs",
      number: 36, years: "1963–1969",
      presidentName: "Lyndon B. Johnson",
      dishName: "LBJ Ranch Barbecued Ribs",
      type: "Main",
      servings: 6,
      difficulty: 3,
      description: "LBJ barbecued on the South Lawn and at the LBJ Ranch with genuine enthusiasm, serving Texas-style ribs to foreign dignitaries who had not expected this from a White House dinner. Low and slow over indirect heat with a simple Texas-style sauce.",
      region: "The LBJ Ranch, Stonewall, Texas",
      notable: "LBJ was the first president to bring Texas-style barbecue to the White House with genuine conviction rather than as a regional novelty. He reportedly brought his own barbecue crew from Texas to Washington for major events.",
      ingredients: ["2 racks pork spare ribs (or beef back ribs)", "DRY RUB: 2 tbsp salt", "2 tbsp black pepper", "1 tbsp paprika", "1 tsp cayenne", "1 tsp garlic powder", "TEXAS SAUCE: 1 cup ketchup", "½ cup cider vinegar", "¼ cup brown sugar", "2 tbsp Worcestershire", "1 tsp black pepper", "1 tsp dry mustard", "Dash hot sauce"],
      instructions: ["Mix dry rub ingredients. Rub generously over all surfaces of ribs.", "Wrap and refrigerate overnight.", "Make sauce: combine all sauce ingredients in a saucepan. Simmer 15 minutes.", "Set up grill for indirect cooking. Target 250-275°F.", "Place ribs bone-side down over indirect heat. Cover.", "Cook 2½-3 hours until ribs are tender and beginning to pull from the bone.", "Brush with sauce in the last 30 minutes of cooking.", "Rest 15 minutes. Cut between bones. Serve with more sauce alongside."]
    },
  ],
  "1970s": [
    {
      name: "Nixon Cottage Cheese",
      number: 37, years: "1969–1974",
      presidentName: "Richard Nixon",
      dishName: "Nixon's Cottage Cheese with Ketchup",
      type: "Breakfast",
      servings: 1,
      difficulty: 1,
      description: "Nixon's cottage cheese topped with ketchup and black pepper was his documented daily breakfast — confirmed by the Nixon Presidential Library and multiple White House staff. An anniversary poem written about Nixon and Pat included the couplet: 'At lunchtime, they are quite easy to please / They just eat fruit and cold cottage cheese.' The ketchup addition was his personal modification.",
      region: "Yorba Linda, California; Washington D.C.",
      notable: "Nixon ate this alone at his desk most mornings before the rest of the White House staff arrived. He and Pat Nixon also frequently ate dinner off television trays in the White House residence — a habit they shared with the Eisenhowers. No recipe is more uniquely presidential.",
      ingredients: ["1 cup full-fat cottage cheese", "Heinz ketchup, to taste (Nixon used a generous amount)", "Freshly ground black pepper", "Optional: a handful of fresh fruit on the side"],
      instructions: ["Spoon cottage cheese into a bowl.", "Add ketchup — more than you think is appropriate.", "Add several grinds of black pepper.", "Do not mix. Eat directly.", "This is genuinely the entirety of the recipe.", "Eat alone at a large desk at 6:30am.", "Consider the nature of power."]
    },
    {
      name: "Pat Nixon Meatloaf",
      number: 37, years: "1969–1974",
      presidentName: "Richard Nixon",
      dishName: "Pat Nixon's Meatloaf",
      type: "Main",
      servings: 6,
      difficulty: 2,
      description: "Pat Nixon's meatloaf was Nixon's comfort dinner — the dish he most associated with home. Simple, well-seasoned, topped with a ketchup glaze, served with mashed potatoes. It was the meal the White House kitchen prepared when Nixon wanted to eat like a regular person.",
      region: "Whittier, California",
      notable: "Multiple White House staff documented that Nixon preferred Pat's meatloaf to almost any state dinner offering. He considered elaborate French cuisine pretentious and generally preferred simple American food, which made the White House kitchen's efforts to impress him fairly futile.",
      ingredients: ["1½ lbs ground beef (or mixture of beef and pork)", "½ cup breadcrumbs", "1 egg", "1 small onion, grated", "2 cloves garlic, minced", "2 tbsp Worcestershire sauce", "1 tsp salt", "½ tsp black pepper", "GLAZE: ½ cup ketchup", "2 tbsp brown sugar", "1 tsp dry mustard"],
      instructions: ["Preheat oven to 350°F.", "Mix all meatloaf ingredients gently until just combined — do not overwork.", "Form into a loaf in a 9x5 loaf pan or free-form on a baking sheet.", "Mix glaze ingredients and spread half over the top.", "Bake 45 minutes.", "Spread remaining glaze over top.", "Bake another 15-20 minutes until internal temperature reaches 160°F.", "Rest 10 minutes before slicing.", "Serve with mashed potatoes, which Nixon also preferred without elaboration."]
    },
    {
      name: "Ford Waffles",
      number: 38, years: "1974–1977",
      presidentName: "Gerald Ford",
      dishName: "Ford's Sunday Waffles with Strawberries and Sour Cream",
      type: "Breakfast",
      servings: 4,
      difficulty: 2,
      description: "Ford's favorite meal was Sunday breakfast: golden brown waffles topped with fresh strawberries and sour cream. He prepared simple food his entire life — bread and soup for lunch, meat and potatoes for dinner — but Sunday waffles were his genuine pleasure.",
      region: "Grand Rapids, Michigan",
      notable: "Ford was the only person to serve as both Vice President and President without being elected to either office. He pardoned Nixon on a Sunday morning — possibly while eating waffles, though history does not record this detail.",
      ingredients: ["2 cups flour", "2 tsp baking powder", "1 tsp baking soda", "½ tsp salt", "2 tbsp sugar", "2 eggs, separated", "2 cups buttermilk", "½ cup butter, melted", "TO SERVE: 1 cup fresh strawberries, sliced and lightly sugared", "1 cup sour cream"],
      instructions: ["Mix flour, baking powder, baking soda, salt, and sugar.", "Beat egg yolks, buttermilk, and melted butter together.", "Combine wet and dry ingredients until just mixed.", "Beat egg whites to stiff peaks. Fold into batter in two additions — this is what makes them light.", "Heat waffle iron and grease lightly.", "Pour batter to fill iron. Cook until steam stops and waffles are deep golden.", "Serve immediately — waffles wait for no one.", "Top generously with sliced strawberries and a large spoonful of sour cream.", "This is the correct way to eat waffles."]
    },
    {
      name: "Carter Shrimp Gumbo",
      number: 39, years: "1977–1981",
      presidentName: "Jimmy Carter",
      dishName: "Carter's Georgia Shrimp Gumbo",
      type: "Main",
      servings: 6,
      difficulty: 4,
      description: "Carter's White House state dinners featured shrimp gumbo on the menu — a Southern coastal dish that reflected his Georgia roots. Simple, deeply flavored, built on a dark roux with okra to thicken, this is the gumbo of the Georgia coast rather than the more elaborate Louisiana version.",
      region: "Plains, Georgia; the Georgia coast",
      notable: "Carter personally operated the White House thermostat, carried his own garment bag onto Air Force One, and wore a cardigan on television to ask Americans to turn down their heat. His unpretentious style extended entirely to his table — shrimp gumbo was genuinely his food, not a political gesture.",
      ingredients: ["½ cup vegetable oil", "½ cup flour", "1 large onion, diced", "4 stalks celery, diced", "1 green bell pepper, diced", "4 cloves garlic, minced", "1 lb okra, sliced", "1 can (14 oz) diced tomatoes", "4 cups shrimp stock or chicken broth", "2 lbs medium shrimp, peeled and deveined", "1 tsp thyme", "2 bay leaves", "Salt, black pepper, cayenne", "Cooked white rice to serve", "File powder (optional, to stir in at serving)"],
      instructions: ["Make a dark roux: heat oil in a heavy Dutch oven over medium heat. Whisk in flour.", "Cook, stirring constantly, for 20-25 minutes until roux is the color of dark chocolate. Do not burn — if it smells scorched, start over.", "Add onion, celery, and bell pepper to the dark roux. Cook 5 minutes.", "Add garlic. Cook 1 minute.", "Add okra. Cook 5 minutes until okra loses its sliminess.", "Add tomatoes and stock. Stir well. Add thyme and bay leaves.", "Simmer 30 minutes.", "Add shrimp. Cook 5-7 minutes until just pink through.", "Season generously with salt, pepper, and cayenne.", "Serve over white rice. Stir in file powder at the table if desired."]
    },
    {
      name: "Carter Grits",
      number: 39, years: "1977–1981",
      presidentName: "Jimmy Carter",
      dishName: "Carter's Breakfast Grits",
      type: "Side",
      servings: 2,
      difficulty: 1,
      description: "Grits — simply prepared, with butter, eaten at breakfast — were Carter's daily constant throughout the presidency. Not shrimp and grits, not cheese grits, just stone-ground grits with butter and salt, exactly as eaten in Plains, Georgia.",
      region: "Plains, Georgia",
      notable: "When Carter won the presidency in 1976, there were genuine concerns in Washington about whether a peanut farmer from Plains, Georgia was sophisticated enough for the office. His insistence on grits for breakfast was considered evidence by those who thought so.",
      ingredients: ["1 cup stone-ground white grits (not instant)", "4 cups water", "1 tsp salt", "2-4 tbsp butter", "Salt and white pepper to taste", "Optional: a splash of whole milk or cream"],
      instructions: ["Bring water and salt to a boil in a heavy saucepan.", "Slowly whisk in grits in a steady stream to prevent lumping.", "Reduce heat to the lowest possible simmer.", "Cook, stirring frequently, for 25-35 minutes until grits are very smooth and creamy.", "Stone-ground grits take longer than instant — this is correct and intentional.", "Stir in butter and milk or cream if using.", "Season with salt and white pepper.", "Serve immediately in a wide bowl.", "This is breakfast. No elaboration required."]
    },
  ],
};

function loadSet(key) {
  try { return new Set(JSON.parse(localStorage.getItem(key) || "[]")); } catch { return new Set(); }
}
function saveSet(key, set) {
  try { localStorage.setItem(key, JSON.stringify([...set])); } catch {}
}

// ─── INGREDIENT PARSER ───────────────────────────────────────────────────────
// Converts "2 cups flour" → { qty: 2, unit: "cup", item: "flour", raw: "2 cups flour" }

const UNITS = {
  // volume
  "cup": "cup", "cups": "cup",
  "tbsp": "tbsp", "tablespoon": "tbsp", "tablespoons": "tbsp",
  "tsp": "tsp", "teaspoon": "tsp", "teaspoons": "tsp",
  "oz": "oz", "ounce": "oz", "ounces": "oz",
  "fl oz": "oz", "fl. oz": "oz",
  "pint": "pint", "pints": "pint",
  "quart": "quart", "quarts": "quart",
  "liter": "liter", "liters": "liter", "l": "liter",
  "ml": "ml",
  // weight
  "lb": "lb", "lbs": "lb", "pound": "lb", "pounds": "lb",
  "g": "g", "gram": "g", "grams": "g",
  "kg": "kg",
  // misc
  "can": "can", "cans": "can",
  "jar": "jar", "jars": "jar",
  "slice": "slice", "slices": "slice",
  "clove": "clove", "cloves": "clove",
  "sprig": "sprig", "sprigs": "sprig",
  "stick": "stick", "sticks": "stick",
  "bunch": "bunch", "bunches": "bunch",
  "dash": "dash", "dashes": "dash",
  "pinch": "pinch", "pinches": "pinch",
  "strip": "strip", "strips": "strip",
  "piece": "piece", "pieces": "piece",
  "head": "head", "heads": "head",
  "stalk": "stalk", "stalks": "stalk",
};

const FRACTIONS = {
  "½": 0.5, "¼": 0.25, "¾": 0.75,
  "⅓": 0.333, "⅔": 0.667,
  "⅛": 0.125, "⅜": 0.375, "⅝": 0.625, "⅞": 0.875,
};

function parseQty(str) {
  // Handle unicode fractions
  let val = 0;
  let s = str.trim();
  for (const [frac, num] of Object.entries(FRACTIONS)) {
    if (s.includes(frac)) {
      val += num;
      s = s.replace(frac, "").trim();
    }
  }
  // Handle "1/2" style
  const fracMatch = s.match(/^(\d+)\/(\d+)$/);
  if (fracMatch) return val + parseInt(fracMatch[1]) / parseInt(fracMatch[2]);
  // Handle whole number
  const num = parseFloat(s);
  if (!isNaN(num)) val += num;
  return val || null;
}

function parseIngredient(raw) {
  // Normalize common "X (N-ounce) package/can" patterns to plain "N oz item"
  // e.g. "1 (8-ounce) package cream cheese" → "8 oz cream cheese"
  // e.g. "½ package cream cheese" (assume 8 oz standard package) → "4 oz cream cheese"
  let normalized_raw = raw;

  // Pattern: "N (Xoz/X-ounce) package/can ITEM" → "N*X oz ITEM"
  const packageWithSize = normalized_raw.match(/^([\d½¼¾⅓⅔⅛⅜⅝⅞\/\s\.]+)\s*\((\d+(?:\.\d+)?)\s*(?:-\s*)?(?:ounce|oz)\)\s*(?:package|can|jar)s?\s+(.+)/i);
  if (packageWithSize) {
    const count = packageWithSize[1].trim();
    const sizeOz = parseFloat(packageWithSize[2]);
    const item = packageWithSize[3].trim();
    // Parse the count
    const countVal = (() => {
      const FRACS = {"½":0.5,"¼":0.25,"¾":0.75,"⅓":0.333,"⅔":0.667,"⅛":0.125,"⅜":0.375,"⅝":0.625,"⅞":0.875};
      let v = 0, s = count;
      for (const [f, n] of Object.entries(FRACS)) { if (s.includes(f)) { v += n; s = s.replace(f, ""); } }
      const n = parseFloat(s);
      if (!isNaN(n)) v += n;
      return v || 1;
    })();
    normalized_raw = `${countVal * sizeOz} oz ${item}`;
  }

  // Pattern: "N package/can ITEM" with no size — use standard sizes
  const STANDARD_PACKAGE_OZ = {
    "cream cheese": 8, "gelatin": 3, "jell-o": 3,
    "onion soup mix": 1, "dry onion soup mix": 1,
    "yeast": 0.25, "active dry yeast": 0.25,
  };
  const packageNoSize = normalized_raw.match(/^([\d½¼¾⅓⅔⅛⅜⅝⅞\/\s\.]+)\s*(?:package|envelope)s?\s+(.+)/i);
  if (packageNoSize && !packageWithSize) {
    const item = packageNoSize[2].trim().toLowerCase();
    const stdOz = Object.entries(STANDARD_PACKAGE_OZ).find(([k]) => item.includes(k));
    if (stdOz) {
      const countStr = packageNoSize[1].trim();
      const FRACS = {"½":0.5,"¼":0.25,"¾":0.75,"⅓":0.333,"⅔":0.667,"⅛":0.125,"⅜":0.375,"⅝":0.625,"⅞":0.875};
      let countVal = 0, s = countStr;
      for (const [f, n] of Object.entries(FRACS)) { if (s.includes(f)) { countVal += n; s = s.replace(f, ""); } }
      const n = parseFloat(s);
      if (!isNaN(n)) countVal += n;
      if (!countVal) countVal = 1;
      normalized_raw = `${countVal * stdOz[1]} oz ${packageNoSize[2].trim()}`;
    }
  }
  // Strip parenthetical notes like "(about 2 cups)" or "(optional)"
  const cleaned = normalized_raw.replace(/\(.*?\)/g, "").trim();

  // Try to match: [qty] [unit] [item]
  // e.g. "2 cups all-purpose flour", "1½ tsp salt", "3 large eggs"
  const pattern = /^([\d½¼¾⅓⅔⅛⅜⅝⅞\/\s\.]+?)\s+([a-zA-Z]+\.?)\s+(.+)$/;
  const match = cleaned.match(pattern);

  if (match) {
    const qtyStr = match[1].trim();
    const unitStr = match[2].toLowerCase().replace(/\.$/, "");
    const item = match[3].trim().toLowerCase();
    const unit = UNITS[unitStr];
    const qty = parseQty(qtyStr);

    if (qty !== null && unit) {
      return { qty, unit, item, raw };
    }
    // No known unit — maybe "2 large eggs", "3 garlic cloves"
    if (qty !== null) {
      return { qty, unit: null, item: (unitStr + " " + item).trim(), raw };
    }
  }

  // Try simpler: just a number at start
  const simpleMatch = cleaned.match(/^([\d½¼¾⅓⅔⅛⅜⅝⅞\/\s\.]+?)\s+(.+)$/);
  if (simpleMatch) {
    const qty = parseQty(simpleMatch[1].trim());
    if (qty !== null) {
      return { qty, unit: null, item: simpleMatch[2].trim().toLowerCase(), raw };
    }
  }

  // Can't parse — return as-is
  return { qty: null, unit: null, item: cleaned.toLowerCase(), raw };
}

function roundToFriendly(qty) {
  // Round to nearest ¼ or ⅛ for cups, nearest ½ for tbsp
  const fractions = [0, 0.125, 0.25, 0.333, 0.375, 0.5, 0.625, 0.667, 0.75, 0.875, 1];
  const whole = Math.floor(qty);
  const frac = qty - whole;
  let closest = fractions.reduce((a, b) => Math.abs(b - frac) < Math.abs(a - frac) ? b : a);
  if (closest === 1) return whole + 1;
  return whole + closest;
}

function formatQty(qty) {
  // Snap to nearest friendly fraction before displaying
  const snapped = roundToFriendly(qty);
  if (snapped === Math.floor(snapped)) return String(snapped);
  const frac = snapped - Math.floor(snapped);
  const whole = Math.floor(snapped);
  const fracStr =
    Math.abs(frac - 0.5)   < 0.01 ? "½" :
    Math.abs(frac - 0.25)  < 0.01 ? "¼" :
    Math.abs(frac - 0.75)  < 0.01 ? "¾" :
    Math.abs(frac - 0.333) < 0.01 ? "⅓" :
    Math.abs(frac - 0.667) < 0.01 ? "⅔" :
    Math.abs(frac - 0.125) < 0.01 ? "⅛" :
    Math.abs(frac - 0.375) < 0.01 ? "⅜" :
    Math.abs(frac - 0.625) < 0.01 ? "⅝" :
    Math.abs(frac - 0.875) < 0.01 ? "⅞" :
    snapped.toFixed(2);
  return whole > 0 ? `${whole}${fracStr}` : fracStr;
}

function pluralUnit(unit, qty) {
  if (qty <= 1) return unit;
  const plurals = {
    "cup": "cups", "tbsp": "tbsp", "tsp": "tsp", "oz": "oz",
    "lb": "lbs", "can": "cans", "jar": "jars", "slice": "slices",
    "clove": "cloves", "sprig": "sprigs", "stick": "sticks",
    "bunch": "bunches", "dash": "dashes", "pinch": "pinches",
    "strip": "strips", "piece": "pieces", "head": "heads",
    "stalk": "stalks", "pint": "pints", "quart": "quarts",
    "gram": "grams", "liter": "liters",
  };
  return plurals[unit] || unit;
}

// Items that should NEVER be treated as volume even if oz is used
const NON_VOLUME_ITEMS = new Set([
  "liverwurst", "braunschweiger", "bacon", "ham", "turkey", "chicken", "beef",
  "pork", "lamb", "veal", "sausage", "salami", "pepperoni", "bologna",
  "cheese", "cream cheese", "cottage cheese", "butter", "lard", "shortening",
  "sardine", "sardines", "tuna", "salmon", "shrimp", "crab", "lobster", "oyster", "oysters",
  "chocolate", "nuts", "walnuts", "pecans", "almonds", "raisins", "dates",
  "bread", "breadcrumbs", "crackers", "flour", "cornmeal", "oats",
  "mushroom", "mushrooms", "onion", "onions", "tomato", "tomatoes",
  "apple", "apples", "celery", "carrot", "carrots", "potato", "potatoes",
  // Vegetables and solids that should never be measured in tbsp
  "bell pepper", "green pepper", "red pepper", "pepper",
  "zucchini", "broccoli", "cauliflower", "cabbage", "spinach", "lettuce",
  "scallion", "scallions", "shallot", "shallots", "garlic",
  "avocado", "cucumber", "artichoke", "artichokes",
  "peas", "beans", "corn", "lima beans",
  "leek", "leeks", "fennel", "parsnip", "turnip",
]);

// Standard pantry items that ARE safe to combine even if multi-word
const STANDARD_PANTRY = new Set([
  "olive oil", "vegetable oil", "canola oil", "coconut oil",
  "soy sauce", "fish sauce", "hot sauce", "worcestershire sauce",
  "red wine vinegar", "white wine vinegar", "cider vinegar", "rice vinegar", "balsamic vinegar",
  "chicken broth", "beef broth", "vegetable broth", "chicken stock", "beef stock",
  "heavy cream", "sour cream", "cream cheese", "whole milk", "skim milk",
  "brown sugar", "powdered sugar", "granulated sugar",
  "baking soda", "baking powder",
  "black pepper", "white pepper", "red pepper",
  "dijon mustard", "dry mustard", "yellow mustard",
  "tomato paste", "tomato sauce",
  "lemon juice", "lime juice", "orange juice",
  "maple syrup", "corn syrup",
  "vanilla extract", "almond extract",
]);

// Detect specialty/named ingredients that should never be combined or unit-converted
// Rule: contains a hyphen, OR is a multi-word name not in STANDARD_PANTRY
function isSpecialtyIngredient(item) {
  const lower = item.toLowerCase().trim();
  // Contains a hyphen — e.g. "tarragon-chive vinegar", "bon appétit seasoning"
  if (lower.includes("-")) return true;
  // Check against standard pantry list
  if (STANDARD_PANTRY.has(lower)) return false;
  // Multi-word items not in standard pantry are treated as specialty
  const words = lower.split(/\s+/).filter(w => w.length > 1);
  if (words.length >= 3) return true;
  return false;
}

function isVolumeIngredient(item, unit) {
  if (!VOLUME_UNITS.has(unit)) return false;
  // oz can mean weight (meat, cheese) or volume (liquids) — check item
  if (unit === "oz") {
    const lower = item.toLowerCase();
    for (const nonVol of NON_VOLUME_ITEMS) {
      if (lower.includes(nonVol)) return false;
    }
  }
  // cups/tbsp/tsp are almost always volume
  return true;
}

const TO_TBSP = {
  "cup": 16, "tbsp": 1, "tsp": 0.333,
  "oz": 2, "pint": 32, "quart": 64, "liter": 67.6, "ml": 0.0676,
};
const VOLUME_UNITS = new Set(Object.keys(TO_TBSP));

function toTbsp(qty, unit) {
  return qty * (TO_TBSP[unit] || 1);
}

function fromTbsp(tbsp) {
  // Use cups if 8 tbsp (½ cup) or more
  if (tbsp >= 8) {
    const cups = roundToFriendly(tbsp / 16);
    return { qty: cups, unit: "cup" };
  }
  // Use tsp if less than 1 tbsp
  if (tbsp < 1) {
    const tsp = roundToFriendly(tbsp / 0.333);
    return { qty: tsp, unit: "tsp" };
  }
  // Otherwise tbsp, rounded to nearest ½
  const rounded = Math.round(tbsp * 2) / 2;
  return { qty: rounded, unit: "tbsp" };
}

// Scale a raw ingredient string by a multiplier
function scaleIngredient(raw, multiplier) {
  if (multiplier === 1) return raw;
  // Strip any "LABEL: " prefix (e.g. "LOUIS DRESSING: 1½ cups mayonnaise")
  // so the parser can find the quantity. Restore it after scaling.
  const labelMatch = raw.match(/^([A-Z][A-Z\s]+):\s+/);
  const label = labelMatch ? labelMatch[1] + ": " : "";
  const rawForParsing = labelMatch ? raw.slice(labelMatch[0].length) : raw;
  const parsed = parseIngredient(rawForParsing);
  if (parsed.qty === null) return raw; // no quantity to scale — return as-is
  const newQty = parsed.qty * multiplier;
  const formatted = formatQty(newQty);
  const unitStr = parsed.unit ? ` ${pluralUnit(parsed.unit, newQty)}` : "";
  // Reconstruct: replace the original qty+unit prefix with the new one
  // Find where the item description starts in the raw string
  const cleaned = rawForParsing.replace(/\(.*?\)/g, "").trim();
  // Try to find item portion after qty and unit
  const qtyPattern = /^[\d½¼¾⅓⅔⅛⅜⅝⅞\/\s\.]+/;
  const afterQty = cleaned.replace(qtyPattern, "").trim();
  // afterQty may start with a unit word
  const unitWords = Object.keys(UNITS);
  let remainder = afterQty;
  for (const u of unitWords) {
    const regex = new RegExp(`^${u}s?\\s+`, 'i');
    if (regex.test(afterQty)) {
      remainder = afterQty.replace(regex, "").trim();
      break;
    }
  }
  // Preserve any parenthetical notes from the original
  const parenMatch = rawForParsing.match(/\(.*?\)/g);
  const parenStr = parenMatch ? " " + parenMatch.join(" ") : "";
  return `${label}${formatted}${unitStr} ${remainder}${parenStr}`.trim();
}

function buildShoppingList(recipeNames, allItems, servingsMap = {}) {
  // allItems = all recipes + presidents flattened
  const selected = allItems.filter(r => recipeNames.has(r.name) && r.ingredients);
  
  // Collect all ingredients
  const parsed = [];
  for (const recipe of selected) {
    const defaultServings = recipe.servings ?? 4;
    const desiredServings = servingsMap[recipe.name] ?? defaultServings;
    const multiplier = desiredServings / defaultServings;
    for (const ing of (recipe.ingredients || [])) {
      const scaledRaw = scaleIngredient(ing, multiplier);
      parsed.push({ ...parseIngredient(scaledRaw), recipeName: recipe.name });
    }
  }

  // Group by normalized item name
  const groups = {};
  for (const p of parsed) {
    const normalized = p.item
      .replace(/^(fresh|dried|frozen|canned|cooked|raw|large|small|medium|whole|ground|minced|chopped|diced|sliced|grated|shredded|softened|melted|cold|hot|warm|room temperature|uncooked|boneless|skinless|lean|extra|very)\s+/gi, "")
      .replace(/,.*$/, "")
      .trim();

    // Specialty named ingredients (e.g. "Tarragon-Chive Vinegar") — list as-is, no combining
    if (isSpecialtyIngredient(normalized)) {
      const key = "specialty||" + p.raw;
      if (!groups[key]) {
        groups[key] = { tbspTotal: 0, qty: null, unit: null, item: normalized, raws: [p.raw], canCombine: false, isVolume: false };
      }
      continue;
    }

    // Normalize volume units — store everything as tbsp internally
    let storeUnit = p.unit;
    let storeQty = p.qty;
    const isVolume = isVolumeIngredient(normalized, p.unit);
    if (isVolume && p.qty !== null) {
      storeQty = toTbsp(p.qty, p.unit);
      storeUnit = "_tbsp"; // internal key
    }

    const key = (storeUnit || "nounit") + "||" + normalized;

    if (!groups[key]) {
      groups[key] = { tbspTotal: 0, qty: 0, unit: storeUnit, item: normalized, raws: [], canCombine: true, isVolume };
    }

    if (storeQty !== null) {
      if (isVolume) {
        groups[key].tbspTotal += storeQty;
      } else {
        groups[key].qty += storeQty;
      }
    } else {
      groups[key].canCombine = false;
      groups[key].raws.push(p.raw);
    }
  }

  // Items that should always be whole numbers (round up)
  const WHOLE_NUMBER_ITEMS = new Set([
    "clove", "cloves", "garlic", "egg", "eggs", "strip", "strips",
    "slice", "slices", "sprig", "sprigs", "leaf", "leaves", "bay leaf",
    "can", "cans", "jar", "jars", "package", "packages", "envelope", "envelopes",
    "stick", "sticks", "bunch", "bunches",
  ]);

  // Standard package sizes — for displaying oz totals as packages at the store
  // Format: "item keyword" → { oz: N, label: "package/stick/can" }
  const PACKAGE_SIZES = {
    "cream cheese":     { oz: 8,   label: "package" },
    "butter":           { oz: 4,   label: "stick" },  // 1 stick = 4 oz = ½ cup
    "cream of tartar":  { oz: 1.5, label: "jar" },
    "sour cream":       { oz: 16,  label: "container" },
    "heavy cream":      { oz: 8,   label: "carton" },
    "half-and-half":    { oz: 8,   label: "carton" },
    "gelatin":          { oz: 3,   label: "box" },
    "chocolate chips":  { oz: 12,  label: "bag" },
    "tomato paste":     { oz: 6,   label: "can" },
    "coconut milk":     { oz: 13.5, label: "can" },
  };

  // Helper: given oz total and item name, return a friendly package display
  function formatAsPackages(ozTotal, itemName) {
    const lower = itemName.toLowerCase();
    const match = Object.entries(PACKAGE_SIZES).find(([k]) => lower.includes(k));
    if (!match) return null;
    const { oz: pkgOz, label } = match[1];
    const pkgCount = ozTotal / pkgOz;
    // Round up to nearest practical fraction (whole, ½, ¼)
    const practical = Math.ceil(pkgCount * 4) / 4;
    const pkgStr = formatQty(practical);
    const pkgLabel = practical <= 1 ? label : label + "s";
    return `${pkgStr} ${pkgLabel} (${formatQty(roundToFriendly(ozTotal))} oz) ${itemName}`;
  }

  // Build display list
  const result = [];
  for (const [key, g] of Object.entries(groups)) {
    if (g.canCombine) {
      let display;
      if (g.isVolume && g.tbspTotal > 0) {
        // Convert back from tbsp to best display unit
        const { qty, unit } = fromTbsp(g.tbspTotal);
        const qtyStr = formatQty(qty);
        const unitStr = ` ${pluralUnit(unit, qty)}`;
        display = `${qtyStr}${unitStr} ${g.item}`;
      } else if (g.qty > 0) {
        // Check if this is an oz item with a known package size
        if (g.unit === "oz") {
          const pkgDisplay = formatAsPackages(g.qty, g.item);
          if (pkgDisplay) {
            display = pkgDisplay;
          } else {
            display = `${formatQty(g.qty)} oz ${g.item}`;
          }
        } else {
          // Round up whole-number items (cloves, eggs, cans etc.)
          const isWhole = WHOLE_NUMBER_ITEMS.has(g.item.toLowerCase()) ||
            (g.unit && WHOLE_NUMBER_ITEMS.has(g.unit.toLowerCase()));
          const displayQty = isWhole ? Math.ceil(g.qty) : g.qty;
          const qtyStr = formatQty(displayQty);
          const unitStr = g.unit && g.unit !== "_tbsp" ? ` ${pluralUnit(g.unit, displayQty)}` : "";
          display = `${qtyStr}${unitStr} ${g.item}`;
        }
      } else {
        continue;
      }
      result.push({
        display,
        item: g.item,
        qty: g.isVolume ? g.tbspTotal : g.qty,
        unit: g.unit,
        checked: false,
      });
    } else {
      const seen = new Set();
      for (const raw of g.raws) {
        const clean = raw.replace(/\(.*?\)/g, "").trim().toLowerCase();
        if (!seen.has(clean)) {
          seen.add(clean);
          result.push({ display: raw, item: g.item, qty: null, unit: null, checked: false });
        }
      }
    }
  }

  // Sort: items with quantities first, then alphabetically
  // Assign store sections to each item
  const STORE_SECTIONS = [
    { name: "🥩 Meat & Seafood", keywords: ["beef", "pork", "chicken", "turkey", "lamb", "veal", "bacon", "ham", "sausage", "chorizo", "prosciutto", "pancetta", "crab", "shrimp", "lobster", "clam", "oyster", "salmon", "tuna", "sardine", "anchovy", "fish", "liverwurst", "braunschweiger"] },
    { name: "🥛 Dairy & Eggs", keywords: ["milk", "cream", "butter", "egg", "eggs", "cheese", "cheddar", "parmesan", "gruyere", "swiss", "mozzarella", "brie", "ricotta", "sour cream", "yogurt", "cream cheese", "half-and-half", "whipping cream", "heavy cream", "buttermilk"] },
    { name: "🥦 Produce", keywords: ["onion", "garlic", "celery", "carrot", "pepper", "tomato", "lettuce", "spinach", "kale", "mushroom", "zucchini", "broccoli", "cauliflower", "cabbage", "potato", "sweet potato", "lemon", "lime", "orange", "apple", "avocado", "cucumber", "scallion", "shallot", "leek", "fennel", "parsnip", "turnip", "mint", "parsley", "thyme", "rosemary", "basil", "dill", "chive", "cilantro", "ginger", "jalapeño", "chili", "arugula", "watercress", "radish", "beet", "asparagus", "corn", "peas"] },
    { name: "🥫 Canned & Jarred", keywords: ["canned", "can of", "tomato paste", "tomato sauce", "crushed tomato", "diced tomato", "coconut milk", "chicken broth", "beef broth", "clam juice", "anchovy paste", "olive", "caper", "pickle", "pimento", "artichoke", "water chestnut", "chestnut", "bean sprout", "bamboo", "chipotle"] },
    { name: "🌾 Dry Goods & Pasta", keywords: ["flour", "cornmeal", "oat", "rice", "pasta", "spaghetti", "noodle", "macaroni", "breadcrumb", "cracker", "bisquick", "baking mix", "cornstarch", "tapioca", "barley", "lentil", "dried bean", "navy bean", "black-eyed", "split pea"] },
    { name: "🧂 Spices & Pantry", keywords: ["salt", "pepper", "paprika", "cumin", "coriander", "turmeric", "curry", "cayenne", "chili powder", "allspice", "cinnamon", "nutmeg", "clove", "ginger powder", "oregano", "thyme dried", "bay leaf", "mustard powder", "celery salt", "onion powder", "garlic powder", "dillweed", "tarragon", "marjoram", "sage", "caraway", "cardamom", "saffron", "vanilla", "baking soda", "baking powder", "cream of tartar", "yeast", "gelatin"] },
    { name: "🫙 Condiments & Sauces", keywords: ["mayonnaise", "ketchup", "mustard", "worcestershire", "soy sauce", "hot sauce", "tabasco", "vinegar", "olive oil", "vegetable oil", "canola oil", "sesame oil", "fish sauce", "oyster sauce", "hoisin", "sriracha", "relish", "chutney", "horseradish"] },
    { name: "🍬 Baking & Sweets", keywords: ["sugar", "brown sugar", "powdered sugar", "honey", "maple syrup", "molasses", "corn syrup", "chocolate", "cocoa", "candy", "jam", "jelly", "marmalade", "raisin", "currant", "date", "dried fruit", "coconut", "almond extract", "food coloring", "marshmallow"] },
    { name: "🥫 Canned Soup & Mixes", keywords: ["soup mix", "onion soup", "cream of mushroom", "cream of chicken", "condensed soup", "bouillon", "gravy mix", "lipton", "knorr"] },
    { name: "🧀 Deli", keywords: ["salami", "pepperoni", "bologna", "olive loaf", "spam", "deviled ham", "liverwurst", "pate", "lox"] },
    { name: "🍷 Wine, Beer & Spirits", keywords: ["wine", "beer", "ale", "stout", "bourbon", "brandy", "rum", "gin", "vodka", "whiskey", "scotch", "sherry", "vermouth", "champagne", "prosecco", "port", "madeira", "marsala", "kirsch", "cointreau", "triple sec", "kahlua", "liqueur"] },
    { name: "🍞 Bread & Bakery", keywords: ["bread", "white bread", "rye bread", "sourdough", "baguette", "roll", "bun", "toast", "english muffin", "pita", "tortilla", "crouton"] },
  ];

  const OTHER_SECTION = "🛒 Other";

  function getSection(item) {
    const lower = item.toLowerCase();
    for (const section of STORE_SECTIONS) {
      if (section.keywords.some(kw => lower.includes(kw))) {
        return section.name;
      }
    }
    return OTHER_SECTION;
  }

  // Add section to each result item
  result.forEach(item => {
    item.section = getSection(item.item || item.display);
  });

  result.sort((a, b) => {
    // Sort by section first, then alphabetically within section
    const sectionOrder = [...STORE_SECTIONS.map(s => s.name), OTHER_SECTION];
    const sA = sectionOrder.indexOf(a.section);
    const sB = sectionOrder.indexOf(b.section);
    if (sA !== sB) return sA - sB;
    return a.item.localeCompare(b.item);
  });

  return result;
}



export default function RecipeBook() {
  const [activeDec, setActiveDec] = useState("1910s");
  const [activeRecipe, setActiveRecipe] = useState(null);
  const [filter, setFilter] = useState("All");
  const [specialTab, setSpecialTab] = useState("all");
  const [favorites, setFavorites] = useState(() => loadSet("rcb_favorites"));
  const [gross, setGross] = useState(() => loadSet("rcb_gross"));
  const [made, setMade] = useState(() => loadSet("rcb_made"));
  const [making, setMaking] = useState(() => { try { return loadSet("rcb_making"); } catch { return new Set(); } });
  const [cart, setCart] = useState(() => loadSet("rcb_cart"));
  const [checkedItems, setCheckedItems] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem("rcb_checked") || "[]")); } catch { return new Set(); }
  });
  const [notes, setNotes] = useState(() => {
    try { return JSON.parse(localStorage.getItem("rcb_notes") || "{}"); } catch { return {}; }
  });
  const [editingNote, setEditingNote] = useState(null); // recipe name currently being edited
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);
  const [pendingOpen, setPendingOpen] = useState(null); // { name, decade } — open after tab switch
  // servingsOverride: { "RecipeName": N } — stores user's desired serving count
  const [servingsOverride, setServingsOverride] = useState(() => {
    try { return JSON.parse(localStorage.getItem("rcb_servings") || "{}"); } catch { return {}; }
  });
  // recipePhotos: { [recipeName]: { dataUrl: string, timestamp: number } }
  const [recipePhotos, setRecipePhotos] = useState(() => {
    try { return JSON.parse(localStorage.getItem("rcb_photos") || "{}"); } catch { return {}; }
  });

  useEffect(() => {
    try { localStorage.setItem("rcb_servings", JSON.stringify(servingsOverride)); } catch {}
  }, [servingsOverride]);

  useEffect(() => {
    try { localStorage.setItem("rcb_photos", JSON.stringify(recipePhotos)); } catch {}
  }, [recipePhotos]);

  const handlePhotoUpload = (recipeName, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const MAX = 800;
        const scale = Math.min(1, MAX / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.82);
        setRecipePhotos(prev => ({
          ...prev,
          [recipeName]: { dataUrl, timestamp: Date.now() }
        }));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = (recipeName) => {
    setRecipePhotos(prev => {
      const next = { ...prev };
      delete next[recipeName];
      return next;
    });
  };

  const getServings = (r) => servingsOverride[r.name] ?? r.servings ?? 4;

  const setServings = (r, n) => {
    const clamped = Math.max(1, Math.min(99, n));
    setServingsOverride(prev => ({ ...prev, [r.name]: clamped }));
  };

  useEffect(() => { saveSet("rcb_favorites", favorites); }, [favorites]);
  useEffect(() => { saveSet("rcb_gross", gross); }, [gross]);
  useEffect(() => { saveSet("rcb_made", made); }, [made]);
  useEffect(() => { saveSet("rcb_making", making); }, [making]);
  useEffect(() => { saveSet("rcb_cart", cart); }, [cart]);
  useEffect(() => {
    try { localStorage.setItem("rcb_checked", JSON.stringify([...checkedItems])); } catch {}
  }, [checkedItems]);
  useEffect(() => {
    try { localStorage.setItem("rcb_notes", JSON.stringify(notes)); } catch {}
  }, [notes]);

  // Open a recipe card after navigating to its decade from the cart
  useEffect(() => {
    if (!pendingOpen) return;
    const { name, decade } = pendingOpen;
    if (activeDec === decade && specialTab === null) {
      const decList = recipes[decade] || [];
      const idx = decList.findIndex(x => x.name === name);
      setActiveRecipe(name + (idx >= 0 ? idx : 0));
      setPendingOpen(null);
      setTimeout(() => {
        const el = document.querySelector(`[data-recipe-name="${CSS.escape(name)}"]`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }, [activeDec, specialTab, pendingOpen]);



  const dec = decades.find(d => d.id === activeDec);
  const allRecipes = Object.entries(recipes).flatMap(([decade, list]) =>
    list.map(r => ({ ...r, decade }))
  );
  const decRecipes = recipes[activeDec] || [];

  // Flatten all presidents with their decade key, mark as president entries
  const allPresidents = Object.entries(presidents).flatMap(([decade, list]) =>
    list.map(p => ({ ...p, decade, isPresident: true }))
  );

  const getDisplayList = () => {
    let list;
    if (specialTab === "all") {
      const recs = filter === "All" || !filter
        ? allRecipes
        : allRecipes.filter(r => r.type === filter || (filter === "Dessert" && r.type === "Dessert") || (filter === "Side" && r.type === "Side"));
      const filteredRecs = filter && filter !== "All"
        ? allRecipes.filter(r => r.type === filter)
        : allRecipes;
      list = (!filter || filter === "All") ? [...allRecipes, ...allPresidents] : filteredRecs;
    }
    else if (specialTab === "presidents") list = allPresidents;
    else if (specialTab === "favorites") {
      const favRecs = allRecipes.filter(r => favorites.has(r.name));
      const favPres = allPresidents.filter(p => favorites.has(p.name));
      list = [...favRecs, ...favPres];
    }
    else if (specialTab === "gross") {
      const gRecs = allRecipes.filter(r => gross.has(r.name));
      const gPres = allPresidents.filter(p => gross.has(p.name));
      list = [...gRecs, ...gPres];
    }
    else if (specialTab === "made") {
      const mRecs = allRecipes.filter(r => made.has(r.name));
      const mPres = allPresidents.filter(p => made.has(p.name));
      list = [...mRecs, ...mPres];
    }
    else if (specialTab === "making") {
      const mkRecs = allRecipes.filter(r => making.has(r.name));
      const mkPres = allPresidents.filter(p => making.has(p.name));
      list = [...mkRecs, ...mkPres];
    }
    else if (specialTab === "cart") {
      const cRecs = allRecipes.filter(r => cart.has(r.name));
      const cPres = allPresidents.filter(p => cart.has(p.name));
      list = [...cRecs, ...cPres];
    }
    else list = filter && filter !== "All"
      ? decRecipes.filter(r => r.type === filter)
      : decRecipes;
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(r =>
        (r.name && r.name.toLowerCase().includes(q)) ||
        (r.dishName && r.dishName.toLowerCase().includes(q)) ||
        (r.presidentName && r.presidentName.toLowerCase().includes(q)) ||
        (r.description && r.description.toLowerCase().includes(q)) ||
        (r.history && r.history.toLowerCase().includes(q)) ||
        (r.notable && r.notable.toLowerCase().includes(q))
      );
    }
    return list;
  };

  const displayList = getDisplayList();

  const toggleFavorite = (name) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(name)) { next.delete(name); }
      else { next.add(name); setGross(g => { const ng = new Set(g); ng.delete(name); return ng; }); }
      return next;
    });
  };

  const toggleGross = (name) => {
    setGross(prev => {
      const next = new Set(prev);
      if (next.has(name)) { next.delete(name); }
      else { next.add(name); setFavorites(f => { const nf = new Set(f); nf.delete(name); return nf; }); }
      return next;
    });
  };

  const toggleMade = (name) => {
    setMade(prev => { const next = new Set(prev); if (next.has(name)) next.delete(name); else next.add(name); return next; });
  };

  const toggleMaking = (name) => {
    setMaking(prev => { const next = new Set(prev); if (next.has(name)) next.delete(name); else next.add(name); return next; });
  };

  const toggleCart = (name) => {
    setCart(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const toggleCheckedItem = (display) => {
    setCheckedItems(prev => {
      const next = new Set(prev);
      if (next.has(display)) next.delete(display);
      else next.add(display);
      return next;
    });
  };

  const handleShare = (r) => {
    const decade = r.decade || activeDec;
    const text = [
      `✦ ${r.name} (${decade})`,
      "─".repeat(40),
      r.description,
      "",
      r.region ? `📍 ${r.region}` : "",
      r.notable ? `⭐ ${r.notable}` : "",
      r.history ? `\n📖 ${r.history}` : "",
      "",
      "INGREDIENTS",
      ...r.ingredients.map(i => `  • ${i}`),
      "",
      "METHOD",
      ...r.instructions.map((s, i) => `  ${i + 1}. ${s}`),
      "",
      "─".repeat(40),
      "From: A Century of Lost Recipes"
    ].filter(l => l !== null).join("\n");
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  const specialColors = {
    all:        { header: "#2A3A2A", accent: "#C8A96E", secondary: "#4A6A4A", paper: "#F2E8D5" },
    presidents: { header: "#6A1A0A", accent: "#C8A96E", secondary: "#2A3A1C", paper: "#F2E8D5" },
    favorites:  { header: "#6A1A2A", accent: "#C8A96E", secondary: "#3A1C1C", paper: "#F2E8D5" },
    gross:      { header: "#2A3A1C", accent: "#C8A96E", secondary: "#3A2A1C", paper: "#F2E8D5" },
    making:     { header: "#3A2A0A", accent: "#C8A96E", secondary: "#2A3A1C", paper: "#F2E8D5" },
    made:       { header: "#1C2A3A", accent: "#C8A96E", secondary: "#2A1C3A", paper: "#F2E8D5" },
    cart:       { header: "#1A2A1A", accent: "#C8A96E", secondary: "#2A4A2A", paper: "#F2E8D5" },
    about:      { header: "#2A1C0E", accent: "#C8A96E", secondary: "#4A3A1C", paper: "#F2E8D5" },
    gallery:    { header: "#1C2A3A", accent: "#C8A96E", secondary: "#3A2A1C", paper: "#F2E8D5" },
  };

  const activePalette = specialTab ? specialColors[specialTab] : dec;

  const emptyMessages = {
    favorites:  { icon: "❤️", text: "No keepers yet", sub: "Tap the heart on any recipe to save it here." },
    gross:      { icon: "🤢", text: "Nothing gross yet", sub: "Tap 🤢 on any recipe you would never eat." },
    making:     { icon: "🍳", text: "Nothing on the stove yet", sub: "Tap 🍳 on any recipe you're currently making." },
    made:       { icon: "👨‍🍳", text: "Nothing cooked yet", sub: "Tap the chef hat on any recipe you have made." },
    presidents: { icon: "🇺🇸", text: "No presidents here", sub: "Something went wrong loading the presidential entries." },
    cart:       { icon: "🛒", text: "No recipes in your list", sub: "Tap 🛒 on any recipe to add its ingredients here." },
    gallery:    { icon: "📷", text: "No snaps yet", sub: "Open any recipe and tap 📷 to add a photo from your camera roll." },
  };

  const typeStyles = {
    "Main":         { color: "#6A2A0A", border: "rgba(106,42,10,0.3)" },
    "Dessert":      { color: "#8B0A2A", border: "rgba(139,10,42,0.3)" },
    "Luncheonette": { color: "#0A3A5A", border: "rgba(10,58,90,0.3)" },
    "Side":         { color: "#2A4A0A", border: "rgba(42,74,10,0.3)" },
    "Soup":         { color: "#5A3A0A", border: "rgba(90,58,10,0.3)" },
    "Appetizer":    { color: "#5A2A6A", border: "rgba(90,42,106,0.3)" },
    "Breakfast":    { color: "#0A4A4A", border: "rgba(10,74,74,0.3)" },
    "Drink":        { color: "#0A3A2A", border: "rgba(10,58,42,0.3)" },
  };

  return (
    <div style={{ fontFamily: "'Georgia', serif", minHeight: "100vh", background: activePalette.paper || "#F2E8D5" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rye&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Oswald:wght@400;500;600;700&family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }

        .decade-btn {
          cursor: pointer;
          font-family: 'Oswald', sans-serif;
          font-weight: 600;
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 7px 12px;
          border: 1.5px solid;
          border-radius: 0;
          transition: all 0.15s;
          white-space: nowrap;
        }

        .special-btn {
          cursor: pointer;
          font-family: 'Oswald', sans-serif;
          font-weight: 600;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 11px;
          border: 1.5px solid;
          border-radius: 0;
          transition: all 0.15s;
        }

        .filter-btn {
          cursor: pointer;
          font-family: 'Oswald', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 10px;
          border: 1.5px solid;
          border-radius: 0;
          transition: all 0.15s;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .recipe-card {
          cursor: pointer;
          margin-bottom: 10px;
          border: 1.5px solid;
          transition: transform 0.1s;
          position: relative;
          overflow: hidden;
        }
        .recipe-card:active { transform: scale(0.995); }

        .icon-btn {
          cursor: pointer;
          border: none;
          background: none;
          padding: 2px 4px;
          transition: transform 0.15s;
          font-size: 0.95rem;
          line-height: 1;
        }
        .icon-btn:hover { transform: scale(1.25); }

        .search-input {
          width: 100%;
          border: 1.5px solid rgba(255,255,255,0.2);
          outline: none;
          font-family: 'Lato', sans-serif;
          font-size: 0.85rem;
          padding: 9px 14px 9px 36px;
          border-radius: 0;
          background: rgba(255,255,255,0.12);
          color: #F2E8D5;
        }
        .search-input::placeholder { color: rgba(242,232,213,0.4); }

        .copied-toast {
          position: fixed;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          background: #2A1C0A;
          color: #C8A96E;
          padding: 9px 22px;
          border: 1px solid rgba(200,169,110,0.4);
          font-family: 'Oswald', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          z-index: 9999;
          pointer-events: none;
        }
        .detail-panel { animation: fadeIn 0.2s ease; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      {/* ═══ HEADER ═══ */}
      <div style={{
        background: activePalette.header,
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 3px 16px rgba(0,0,0,0.35)",
      }}>
        {/* Top accent stripe */}
        <div style={{ height: 6, background: activePalette.accent, opacity: 0.9 }} />
        <div style={{ height: 2, background: activePalette.secondary, opacity: 0.6 }} />

        <div style={{ padding: "18px 18px 0", position: "relative", overflow: "hidden" }}>

          {/* Eyebrow */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 8,
          }}>
            <div style={{ height: 1, width: 20, background: activePalette.accent, opacity: 0.45 }} />
            <div style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.54rem",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: activePalette.accent,
              opacity: 0.65,
            }}>
              Forgotten American Kitchen
            </div>
            <div style={{ height: 1, flex: 1, background: activePalette.accent, opacity: 0.25 }} />
            <button
              onClick={() => { setSpecialTab(specialTab === "about" ? null : "about"); setActiveRecipe(null); }}
              style={{
                background: "transparent",
                border: "none",
                color: specialTab === "about" ? activePalette.accent : "rgba(242,232,213,0.25)",
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.6rem",
                cursor: "pointer",
                padding: "0 2px",
                lineHeight: 1,
              }}>
              ✦
            </button>
          </div>

          {/* Title */}
          <div style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: activePalette.accent,
            opacity: 0.55,
            marginBottom: 3,
          }}>
            A Century of
          </div>
          <div style={{
            fontFamily: "'Rye', serif",
            fontSize: "2.3rem",
            color: "#F2E8D5",
            lineHeight: 1,
            marginBottom: 10,
            textShadow: "2px 3px 0 rgba(0,0,0,0.3)",
          }}>
            Lost Recipes
          </div>

          {/* Ornament */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 14,
          }}>
            <div style={{ height: 2, width: 28, background: activePalette.accent, opacity: 0.6 }} />
            <div style={{ height: 6, width: 6, background: activePalette.accent, opacity: 0.7, transform: "rotate(45deg)" }} />
            <div style={{ height: 2, width: 10, background: activePalette.secondary, opacity: 0.5 }} />
            <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,0.1)" }} />
          </div>

          {/* Decade tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 6 }}>
            {decades.map(d => (
              <button key={d.id} className="decade-btn"
                onClick={() => { setActiveDec(d.id); setSpecialTab(null); setActiveRecipe(null); setFilter("All"); }}
                style={{
                  background: (!specialTab && activeDec === d.id) ? activePalette.accent : "transparent",
                  color: (!specialTab && activeDec === d.id) ? activePalette.header : "rgba(242,232,213,0.55)",
                  borderColor: (!specialTab && activeDec === d.id) ? activePalette.accent : "rgba(255,255,255,0.18)",
                }}>
                {d.label.slice(0, -1)}<span style={{ textTransform: "none" }}>s</span>
              </button>
            ))}
            <button className="decade-btn"
              onClick={() => { setSpecialTab("all"); setActiveRecipe(null); setFilter("All"); }}
              style={{
                background: specialTab === "all" ? activePalette.accent : "transparent",
                color: specialTab === "all" ? activePalette.header : "rgba(242,232,213,0.55)",
                borderColor: specialTab === "all" ? activePalette.accent : "rgba(255,255,255,0.18)",
              }}>
              All
            </button>
            <button className="decade-btn"
              onClick={() => { setSpecialTab("presidents"); setActiveRecipe(null); setFilter("All"); }}
              style={{
                background: specialTab === "presidents" ? activePalette.accent : "transparent",
                color: specialTab === "presidents" ? activePalette.header : "rgba(242,232,213,0.55)",
                borderColor: specialTab === "presidents" ? activePalette.accent : "rgba(255,255,255,0.18)",
              }}>
              🇺🇸 Presidents
            </button>
          </div>

          {/* Special tabs */}
          <div style={{ display: "flex", gap: 5, paddingBottom: 14 }}>
            {[
              ["favorites", `❤️ Keepers${favorites.size > 0 ? ` (${favorites.size})` : ""}`],
              ["gross",     `🤢 Gross${gross.size > 0 ? ` (${gross.size})` : ""}`],
              ["making",    `🍳 Making${making.size > 0 ? ` (${making.size})` : ""}`],
              ["made",      `👨‍🍳 Made${made.size > 0 ? ` (${made.size})` : ""}`],
              ["cart",      `🛒 List${cart.size > 0 ? ` (${cart.size})` : ""}`],
              ["gallery",   `📷 Snaps${Object.keys(recipePhotos).length > 0 ? ` (${Object.keys(recipePhotos).length})` : ""}`],
            ].map(([key, label]) => (
              <button key={key} className="special-btn"
                onClick={() => { setSpecialTab(specialTab === key ? null : key); setActiveRecipe(null); }}
                style={{
                  background: specialTab === key ? activePalette.accent : "transparent",
                  color: specialTab === key ? activePalette.header : "rgba(242,232,213,0.45)",
                  borderColor: specialTab === key ? activePalette.accent : "rgba(255,255,255,0.12)",
                }}>
                {label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ height: 2, background: activePalette.secondary, opacity: 0.5 }} />
        <div style={{ height: 5, background: activePalette.accent, opacity: 0.75 }} />
      </div>

      {/* ═══ CONTENT ═══ */}
      <div style={{ padding: "14px 14px 40px", background: activePalette.paper || "#F2E8D5" }}>

        {/* Search */}
        {specialTab !== "about" && specialTab !== "gallery" && (
        <div style={{ position: "relative", marginBottom: 14 }}>
          <span style={{
            position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)",
            color: (activePalette.header), opacity: 0.35, fontSize: "0.85rem", pointerEvents: "none",
          }}>🔍</span>
          <input
            className="search-input"
            placeholder="Search recipes, presidents, history..."
            value={search}
            onChange={e => { setSearch(e.target.value); setActiveRecipe(null); }}
            style={{
              background: "rgba(255,255,255,0.75)",
              color: "#2A1C0A",
              border: `1.5px solid rgba(${parseInt(activePalette.header.slice(1,3),16)},${parseInt(activePalette.header.slice(3,5),16)},${parseInt(activePalette.header.slice(5,7),16)},0.2)`,
            }}
          />
          {search && (
            <button onClick={() => setSearch("")} style={{
              position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", cursor: "pointer", color: "#aaa", fontSize: "1rem",
            }}>×</button>
          )}
        </div>
        )}

        {/* Filter pills */}
        {(!specialTab || specialTab === "all" || specialTab === "presidents") && (
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 12, overflowX: "auto", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none", paddingBottom: 2 }}>
            <span style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.57rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#999",
              flexShrink: 0,
            }}>Show:</span>
            {["All", "Appetizer", "Dessert", "Luncheonette", "Side"].map(f => {
              const count = f === "All"
                ? (specialTab === "all" ? allRecipes.length + allPresidents.length : (() => {
                    const presPre = activeDec === "1910s" ? (presidents["pre-1910s"] || []).length : 0;
                    const presDecade = (presidents[activeDec] || []).length;
                    return decRecipes.length + presPre + presDecade;
                  })())
                : (specialTab === "all" ? allRecipes.filter(r => r.type === f).length : decRecipes.filter(r => r.type === f).length);
              const label = f === "All" ? `All (${count})` : f === "Appetizer" ? `Appetizers (${count})` : f === "Dessert" ? `Desserts (${count})` : f === "Side" ? `Sides (${count})` : `Luncheonette (${count})`;
              const isActive = filter === f;
              return (
                <button key={f} className="filter-btn"
                  onClick={() => { setFilter(f); setActiveRecipe(null); }}
                  style={{
                    background: isActive ? activePalette.header : "transparent",
                    color: isActive ? "#F2E8D5" : "#888",
                    borderColor: isActive ? activePalette.header : "#ccc",
                  }}>
                  {label}
                </button>
              );
            })}
          </div>
        )}

        {/* Recipe count */}
        {specialTab !== "about" && specialTab !== "cart" && specialTab !== "gallery" && (
          <div style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "0.58rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#aaa",
            marginBottom: 10,
          }}>
            {displayList.length} {displayList.length === 1 ? "entry" : "entries"}
            {search ? ` matching "${search}"` : ""}
          </div>
        )}

        {/* ─── renderCard ─── */}
        {(() => {
          const renderCard = (r, i, cardDec) => {
            const isOpen = activeRecipe === (r.name + i);
            const tStyle = typeStyles[r.type] || typeStyles["Main"];
            const isPresident = r.isPresident;
            const headerColor = cardDec ? cardDec.header : activePalette.header;
            const accentColor = cardDec ? cardDec.accent : activePalette.accent;
            const borderColor = `rgba(${parseInt(headerColor.slice(1,3),16)},${parseInt(headerColor.slice(3,5),16)},${parseInt(headerColor.slice(5,7),16)},0.18)`;

            return (
              <div key={r.name + i} className="recipe-card"
                data-recipe-name={r.name}
                style={{ borderColor, background: "#FDFAF4" }}
                onClick={() => setActiveRecipe(isOpen ? null : (r.name + i))}>

                {/* Top band */}
                <div style={{ height: 4, background: headerColor, opacity: 0.85 }} />

                <div style={{ padding: "12px 13px 12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                    <div style={{ flex: 1 }}>
                      {/* Decade badge for special tabs */}
                      {(specialTab || search) && r.decade && (
                        <div style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: "0.52rem",
                          fontWeight: 600,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: accentColor,
                          marginBottom: 3,
                          opacity: 0.7,
                        }}>
                          {r.decade === "pre-1910s" ? "Pre-1910s" : r.decade}
                        </div>
                      )}
                      {/* Type badge */}
                      {!isPresident && r.type && (
                        <span style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: "0.5rem",
                          fontWeight: 600,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: tStyle.color,
                          border: `1px solid ${tStyle.border}`,
                          padding: "2px 6px",
                          display: "inline-block",
                          marginBottom: 5,
                          marginRight: 6,
                        }}>
                          {r.type}
                        </span>
                      )}
                      {/* Serves stepper */}
                      {(r.servings || servingsOverride[r.name]) && (
                        <span
                          onClick={e => e.stopPropagation()}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0,
                            marginBottom: 5,
                            marginRight: 6,
                            border: `1px solid rgba(${parseInt(headerColor.slice(1,3),16)},${parseInt(headerColor.slice(3,5),16)},${parseInt(headerColor.slice(5,7),16)},0.22)`,
                            borderRadius: 2,
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}>
                          <button
                            onClick={e => { e.stopPropagation(); setServings(r, getServings(r) - 1); }}
                            style={{
                              fontFamily: "'Oswald', sans-serif",
                              fontSize: "0.65rem",
                              fontWeight: 700,
                              background: "transparent",
                              border: "none",
                              color: headerColor,
                              opacity: 0.5,
                              cursor: "pointer",
                              padding: "1px 5px",
                              lineHeight: 1,
                            }}>−</button>
                          <span style={{
                            fontFamily: "'Oswald', sans-serif",
                            fontSize: "0.5rem",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: headerColor,
                            opacity: 0.65,
                            padding: "2px 4px",
                            whiteSpace: "nowrap",
                            borderLeft: `1px solid rgba(${parseInt(headerColor.slice(1,3),16)},${parseInt(headerColor.slice(3,5),16)},${parseInt(headerColor.slice(5,7),16)},0.15)`,
                            borderRight: `1px solid rgba(${parseInt(headerColor.slice(1,3),16)},${parseInt(headerColor.slice(3,5),16)},${parseInt(headerColor.slice(5,7),16)},0.15)`,
                          }}>
                            Serves {getServings(r)}
                          </span>
                          <button
                            onClick={e => { e.stopPropagation(); setServings(r, getServings(r) + 1); }}
                            style={{
                              fontFamily: "'Oswald', sans-serif",
                              fontSize: "0.65rem",
                              fontWeight: 700,
                              background: "transparent",
                              border: "none",
                              color: headerColor,
                              opacity: 0.5,
                              cursor: "pointer",
                              padding: "1px 5px",
                              lineHeight: 1,
                            }}>+</button>
                        </span>
                      )}
                      {r.difficulty && (
                        <span style={{ display: "inline-flex", gap: 2, verticalAlign: "middle", marginBottom: 5 }}>
                          {[1,2,3,4,5].map(n => (
                            <span key={n} style={{
                              width: 5, height: 5, borderRadius: "50%",
                              display: "inline-block",
                              background: n <= r.difficulty ? headerColor : "rgba(0,0,0,0.1)",
                              opacity: n <= r.difficulty ? 0.5 + n * 0.1 : 1,
                            }} />
                          ))}
                        </span>
                      )}

                      {/* Name */}
                      <div style={{
                        fontFamily: isPresident ? "'Oswald', sans-serif" : "'Playfair Display', serif",
                        fontSize: isPresident ? "0.75rem" : "1.15rem",
                        fontWeight: isPresident ? 600 : 700,
                        color: headerColor,
                        lineHeight: 1.2,
                        letterSpacing: isPresident ? "0.08em" : "0",
                        textTransform: isPresident ? "uppercase" : "none",
                      }}>
                        {isPresident ? (r.presidentName || r.name) : r.name}
                      </div>
                      {isPresident && r.dishName && (
                        <div style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: headerColor,
                          lineHeight: 1.2,
                          marginTop: 2,
                        }}>
                          {r.dishName}
                        </div>
                      )}
                    </div>

                    {/* Icons */}
                    <div style={{ display: "flex", alignItems: "center", gap: 6, paddingTop: 2, flexShrink: 0 }}>
                      <button className="icon-btn"
                        onClick={e => { e.stopPropagation(); toggleFavorite(r.name); }}
                        style={{ color: favorites.has(r.name) ? "#C8364A" : "rgba(0,0,0,0.18)" }}>
                        {favorites.has(r.name) ? "❤️" : "🤍"}
                      </button>
                      <button className="icon-btn"
                        onClick={e => { e.stopPropagation(); toggleGross(r.name); }}
                        style={{ opacity: gross.has(r.name) ? 1 : 0.25 }}>
                        🤢
                      </button>
                      <button className="icon-btn"
                        onClick={e => { e.stopPropagation(); if (toggleMaking) toggleMaking(r.name); }}
                        style={{ opacity: making && making.has(r.name) ? 1 : 0.25 }}
                        title="Currently making">
                        🍳
                      </button>
                      <button className="icon-btn"
                        onClick={e => { e.stopPropagation(); toggleMade(r.name); }}
                        style={{ opacity: made.has(r.name) ? 1 : 0.25 }}>
                        👨‍🍳
                      </button>
                      <button className="icon-btn"
                        onClick={e => { e.stopPropagation(); toggleCart(r.name); }}
                        style={{ opacity: cart.has(r.name) ? 1 : 0.25 }}
                        title="Add to shopping list">
                        🛒
                      </button>
                      <span style={{
                        fontSize: "0.55rem",
                        color: "#aaa",
                        display: "inline-block",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                        paddingLeft: 2,
                      }}>▼</span>
                    </div>
                  </div>

                  {/* Description preview */}
                  {!isOpen && (
                    <div style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "0.8rem",
                      color: "#666",
                      lineHeight: 1.5,
                      marginTop: 6,
                      fontStyle: "italic",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}>
                      {r.description}
                    </div>
                  )}
                </div>

                {/* Expanded */}
                {isOpen && (
                  <div className="detail-panel" style={{ padding: "0 13px 14px", background: "#FDFAF4" }}>
                    {/* Diamond divider */}
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                      <div style={{ height: 1, flex: 1, background: headerColor, opacity: 0.12 }} />
                      <div style={{ height: 5, width: 5, background: accentColor, transform: "rotate(45deg)", opacity: 0.6 }} />
                      <div style={{ height: 1, flex: 1, background: headerColor, opacity: 0.12 }} />
                    </div>

                    {/* Recipe photo (if uploaded) */}
                    {recipePhotos[r.name] && (
                      <div style={{ marginBottom: 14, marginLeft: -13, marginRight: -13 }}>
                        <img
                          src={recipePhotos[r.name].dataUrl}
                          alt={r.name}
                          style={{ width: "100%", display: "block", maxHeight: 240, objectFit: "cover" }}
                        />
                      </div>
                    )}

                    <p style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "0.84rem",
                      color: "#444",
                      lineHeight: 1.65,
                      fontStyle: "italic",
                      marginBottom: 12,
                    }}>{r.description}</p>

                    {r.region && (
                      <div style={{ marginBottom: 10 }}>
                        <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.52rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa", marginBottom: 3 }}>Region</div>
                        <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "#666", lineHeight: 1.5 }}>{r.region}</div>
                      </div>
                    )}

                    {r.notable && (
                      <div style={{ borderLeft: `3px solid ${accentColor}`, paddingLeft: 10, marginBottom: 12, opacity: 0.9 }}>
                        <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.52rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa", marginBottom: 3 }}>Notable</div>
                        <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "#555", lineHeight: 1.5 }}>{r.notable}</div>
                      </div>
                    )}

                    {r.history && (
                      <div style={{ marginBottom: 12 }}>
                        <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.52rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa", marginBottom: 3 }}>History</div>
                        <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "#555", lineHeight: 1.6 }}>{r.history}</div>
                      </div>
                    )}

                    {r.ingredients && r.ingredients.length > 0 && (
                      <div style={{ marginBottom: 12 }}>
                        <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.52rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa", marginBottom: 6 }}>
                          Ingredients
                          {r.servings && getServings(r) !== r.servings && (
                            <span style={{ marginLeft: 6, color: accentColor, opacity: 0.8 }}>
                              (scaled for {getServings(r)})
                            </span>
                          )}
                        </div>
                        <ul style={{ margin: 0, padding: "0 0 0 16px", fontFamily: "'Lato', sans-serif", fontSize: "0.82rem", color: "#444", lineHeight: 1.8 }}>
                          {r.ingredients.map((ing, j) => {
                            const defaultServings = r.servings ?? 4;
                            const desired = getServings(r);
                            const multiplier = desired / defaultServings;
                            const display = (multiplier !== 1)
                              ? scaleIngredient(ing, multiplier)
                              : ing;
                            return <li key={j}>{display}</li>;
                          })}
                        </ul>
                      </div>
                    )}

                    {r.instructions && r.instructions.length > 0 && (
                      <div style={{ marginBottom: 12 }}>
                        <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.52rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa", marginBottom: 6 }}>Method</div>
                        <ol style={{ margin: 0, padding: "0 0 0 16px", fontFamily: "'Lato', sans-serif", fontSize: "0.82rem", color: "#444", lineHeight: 1.8 }}>
                          {r.instructions.map((step, j) => <li key={j} style={{ marginBottom: 3 }}>{step}</li>)}
                        </ol>
                      </div>
                    )}

                    {/* Personal notes */}
                    <div style={{ marginBottom: 14, borderTop: `1px solid ${headerColor}15`, paddingTop: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                        <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.52rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa" }}>
                          My Notes
                        </div>
                        {editingNote !== r.name && (
                          <button
                            onClick={e => { e.stopPropagation(); setEditingNote(r.name); }}
                            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.7rem", color: accentColor, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.7, padding: "2px 0" }}>
                            {notes[r.name] ? "✎ Edit" : "+ Add Note"}
                          </button>
                        )}
                      </div>
                      {editingNote === r.name ? (
                        <div onClick={e => e.stopPropagation()}>
                          <textarea
                            autoFocus
                            defaultValue={notes[r.name] || ""}
                            onBlur={e => {
                              const val = e.target.value.trim();
                              setNotes(prev => {
                                const next = { ...prev };
                                if (val) next[r.name] = val;
                                else delete next[r.name];
                                return next;
                              });
                              setEditingNote(null);
                            }}
                            onKeyDown={e => {
                              if (e.key === "Escape") setEditingNote(null);
                            }}
                            placeholder="e.g. serve warm, add more garlic, halve the recipe next time..."
                            style={{
                              width: "100%",
                              minHeight: 72,
                              fontFamily: "'Lato', sans-serif",
                              fontSize: "0.82rem",
                              color: "#444",
                              border: `1px solid ${accentColor}55`,
                              borderRadius: 2,
                              padding: "8px 10px",
                              background: "#FDFAF4",
                              resize: "vertical",
                              outline: "none",
                              boxSizing: "border-box",
                              lineHeight: 1.6,
                            }}
                          />
                          <div style={{ fontSize: "0.65rem", color: "#aaa", fontFamily: "'Lato', sans-serif", marginTop: 4 }}>
                            Tap outside to save · Esc to cancel
                          </div>
                        </div>
                      ) : notes[r.name] ? (
                        <div style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: "0.82rem",
                          color: "#555",
                          lineHeight: 1.6,
                          fontStyle: "italic",
                          background: `${accentColor}0E`,
                          border: `1px solid ${accentColor}25`,
                          padding: "8px 10px",
                          borderRadius: 2,
                        }}>
                          {notes[r.name]}
                        </div>
                      ) : (
                        <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.78rem", color: "#ccc", fontStyle: "italic" }}>
                          No notes yet
                        </div>
                      )}
                    </div>
                    <button
                      onClick={e => { e.stopPropagation(); handleShare(r); }}
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "0.6rem",
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        padding: "7px 14px",
                        border: `1.5px solid ${accentColor}`,
                        background: "transparent",
                        color: accentColor,
                        cursor: "pointer",
                        marginTop: 4,
                      }}>
                      📤 Share Recipe
                    </button>

                    {/* Photo upload */}
                    <div
                      onClick={e => e.stopPropagation()}
                      style={{ marginTop: 10, borderTop: `1px solid ${headerColor}15`, paddingTop: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                        <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.52rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa" }}>
                          My Photo
                        </div>
                        {recipePhotos[r.name] && (
                          <button
                            onClick={e => { e.stopPropagation(); removePhoto(r.name); }}
                            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.65rem", color: "#bbb", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase", padding: "2px 0" }}>
                            ✕ Remove
                          </button>
                        )}
                      </div>
                      {recipePhotos[r.name] ? (
                        <div style={{ position: "relative" }}>
                          <img
                            src={recipePhotos[r.name].dataUrl}
                            alt={r.name}
                            style={{ width: "100%", display: "block", maxHeight: 260, objectFit: "cover", border: `1px solid ${headerColor}20` }}
                          />
                          <label style={{
                            position: "absolute", bottom: 8, right: 8,
                            background: "rgba(0,0,0,0.55)",
                            color: "#F2E8D5",
                            fontFamily: "'Oswald', sans-serif",
                            fontSize: "0.58rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            padding: "5px 10px",
                            cursor: "pointer",
                          }}>
                            📷 Replace
                            <input type="file" accept="image/*" capture="environment"
                              style={{ display: "none" }}
                              onChange={e => handlePhotoUpload(r.name, e.target.files[0])} />
                          </label>
                        </div>
                      ) : (
                        <label style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                          padding: "16px 14px",
                          border: `1.5px dashed ${accentColor}55`,
                          background: `${accentColor}06`,
                          cursor: "pointer",
                        }}>
                          <span style={{ fontSize: "1.3rem" }}>📷</span>
                          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: accentColor, opacity: 0.8 }}>
                            Add a Photo
                          </span>
                          <input type="file" accept="image/*" capture="environment"
                            style={{ display: "none" }}
                            onChange={e => handlePhotoUpload(r.name, e.target.files[0])} />
                        </label>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          };

          // Gallery view
          if (specialTab === "gallery") {
            const photoEntries = Object.entries(recipePhotos)
              .sort((a, b) => (b[1].timestamp || 0) - (a[1].timestamp || 0));

            if (photoEntries.length === 0) {
              return (
                <div style={{ textAlign: "center", padding: "50px 20px" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>📷</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#777", marginBottom: 6 }}>No photos yet</div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "#aaa" }}>Open any recipe and tap 📷 to add a photo from your camera roll.</div>
                </div>
              );
            }

            return (
              <div>
                <div style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "0.58rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#aaa",
                  marginBottom: 12,
                }}>
                  {photoEntries.length} {photoEntries.length === 1 ? "photo" : "photos"} · tap to open recipe
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {photoEntries.map(([recipeName, photo]) => {
                    // Find which recipe/decade this belongs to
                    const recipeObj = allRecipes.find(r => r.name === recipeName)
                      || allPresidents.find(p => p.name === recipeName);
                    return (
                      <div
                        key={recipeName}
                        onClick={() => {
                          if (!recipeObj) return;
                          const decade = recipeObj.decade;
                          setSpecialTab(null);
                          setSearch("");
                          setFilter("All");
                          setActiveDec(decade);
                          const decList = recipes[decade] || [];
                          const idx = decList.findIndex(x => x.name === recipeName);
                          setPendingOpen({ name: recipeName, decade });
                        }}
                        style={{ cursor: "pointer", position: "relative", overflow: "hidden" }}>
                        <img
                          src={photo.dataUrl}
                          alt={recipeName}
                          style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }}
                        />
                        {/* Name overlay */}
                        <div style={{
                          position: "absolute",
                          bottom: 0, left: 0, right: 0,
                          background: "linear-gradient(transparent, rgba(0,0,0,0.72))",
                          padding: "18px 8px 7px",
                        }}>
                          <div style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            color: "#F2E8D5",
                            lineHeight: 1.2,
                          }}>{recipeName}</div>
                          {recipeObj?.decade && (
                            <div style={{
                              fontFamily: "'Oswald', sans-serif",
                              fontSize: "0.48rem",
                              letterSpacing: "0.15em",
                              textTransform: "uppercase",
                              color: "rgba(242,232,213,0.65)",
                              marginTop: 2,
                            }}>{recipeObj.decade}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          // About page
          if (specialTab === "about") {
            return (
              <div style={{ paddingBottom: 20 }}>
                {/* Title block */}
                <div style={{
                  borderLeft: `4px solid ${activePalette.accent}`,
                  paddingLeft: 14,
                  marginBottom: 24,
                }}>
                  <div style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.58rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#aaa",
                    marginBottom: 4,
                  }}>About This Project</div>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: activePalette.header,
                    lineHeight: 1.2,
                  }}>A Century of Lost Recipes</div>
                </div>

                {/* Main text */}
                {[
                  {
                    heading: "The Idea",
                    body: "A Century of Lost Recipes is a collection of American dishes that have largely disappeared from home kitchens and restaurant menus over the past hundred years. Not bad recipes — forgotten ones. Dishes that were standard Sunday dinners, lunch counter staples, and presidential favorites that simply fell out of fashion as tastes, economics, and food culture changed.",
                  },
                  {
                    heading: "The Lunken Airport Connection",
                    body: "Several of the Luncheonette recipes in this collection were drawn directly from the surviving menu of the lunch counter at Lunken Municipal Airport in Cincinnati, Ohio — Cincinnati's original commercial airport, opened in 1925. The Lunken menu, circa 1945-1955, listed items like the Pilot's Delight, the Cockpit Special, liverwurst, postum, and tomato stuffed with chicken salad. It is one of the most complete surviving records of mid-century American lunch counter culture.",
                  },
                  {
                    heading: "The Presidents",
                    body: "Every president from George Washington through Jimmy Carter is represented with at least one signature dish. Some are genuinely surprising — Nixon ate cottage cheese with ketchup every morning. Eisenhower made his own vegetable soup from scratch. Washington's eggnog recipe called for quantities of spirits that would render most modern drinkers unconscious.",
                  },
                  {
                    heading: "The Design",
                    body: "The app uses a WPA poster aesthetic — the visual language of the Works Progress Administration's American art program of the 1930s and 40s. Bold typography, warm earth tones, and geometric ornaments reflect the era most of these recipes come from. The Rye typeface was chosen because it looks like it was painted on the window of an old luncheonette.",
                  },
                  {
                    heading: "Difficulty Guide",
                    body: "Each recipe shows a difficulty indicator — five dots, filled to reflect how demanding the recipe is. One dot means you can make it in ten minutes with no special skills. Five dots means it requires technique, time, and commitment. The beef tongue is a four.",
                  },
                ].map((section, i) => (
                  <div key={i} style={{ marginBottom: 20 }}>
                    <div style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "0.6rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: activePalette.header,
                      opacity: 0.6,
                      marginBottom: 5,
                    }}>{section.heading}</div>
                    <div style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "0.88rem",
                      color: "#444",
                      lineHeight: 1.7,
                    }}>{section.body}</div>
                    {i < 4 && (
                      <div style={{
                        height: 1,
                        background: activePalette.header,
                        opacity: 0.08,
                        marginTop: 16,
                      }} />
                    )}
                  </div>
                ))}

                {/* Ornamental footer */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 24,
                  opacity: 0.4,
                }}>
                  <div style={{ height: 1, flex: 1, background: activePalette.header }} />
                  <div style={{ height: 5, width: 5, background: activePalette.accent, transform: "rotate(45deg)" }} />
                  <div style={{ height: 1, flex: 1, background: activePalette.header }} />
                </div>
              </div>
            );
          }

          // Shopping list view
          if (specialTab === "cart") {
            if (cart.size === 0) {
              return (
                <div style={{ textAlign: "center", padding: "50px 20px" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>🛒</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#777", marginBottom: 6 }}>No recipes in your list</div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "#aaa" }}>Tap 🛒 on any recipe to add its ingredients here.</div>
                </div>
              );
            }

            const allItems = [...allRecipes, ...allPresidents];
            const shoppingList = buildShoppingList(cart, allItems, servingsOverride);
            const cartRecipes = allItems.filter(r => cart.has(r.name));

            return (
              <div>
                {/* Recipes in list */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.58rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#aaa",
                    marginBottom: 8,
                  }}>
                    {cart.size} {cart.size === 1 ? "Recipe" : "Recipes"} Selected
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                    {cartRecipes.map(r => (
                      <div key={r.name} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        background: activePalette.header,
                        color: activePalette.accent,
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        padding: "5px 10px",
                        border: `1px solid ${activePalette.accent}`,
                        opacity: 0.85,
                      }}>
                        <span
                          onClick={() => {
                            const decade = r.decade;
                            if (decade) {
                              setActiveDec(decade);
                              setSpecialTab(null);
                              setActiveRecipe(null);
                              setPendingOpen({ name: r.name, decade });
                              window.scrollTo(0, 0);
                            }
                          }}
                          style={{ cursor: "pointer" }}>
                          {r.name}
                        </span>
                        <span
                          onClick={() => toggleCart(r.name)}
                          style={{ cursor: "pointer", opacity: 0.6, fontSize: "0.9rem", lineHeight: 1 }}>
                          ×
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Diamond divider */}
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
                    <div style={{ height: 1, flex: 1, background: activePalette.header, opacity: 0.15 }} />
                    <div style={{ height: 5, width: 5, background: activePalette.accent, transform: "rotate(45deg)", opacity: 0.5 }} />
                    <div style={{ height: 1, flex: 1, background: activePalette.header, opacity: 0.15 }} />
                  </div>
                </div>

                {/* Shopping list items */}
                <div style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "0.58rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#aaa",
                  marginBottom: 10,
                }}>
                  {shoppingList.length} Ingredients
                </div>

                <div style={{ marginBottom: 20 }}>
                  {(() => {
                    // Group by section
                    const sections = {};
                    shoppingList.forEach(item => {
                      const sec = item.section || "🛒 Other";
                      if (!sections[sec]) sections[sec] = [];
                      sections[sec].push(item);
                    });

                    return Object.entries(sections).map(([sectionName, items]) => {
                      // Within each section: unchecked first, checked sink to bottom
                      const sorted = [...items].sort((a, b) => {
                        const aChecked = checkedItems.has(a.display) ? 1 : 0;
                        const bChecked = checkedItems.has(b.display) ? 1 : 0;
                        if (aChecked !== bChecked) return aChecked - bChecked;
                        return a.item.localeCompare(b.item);
                      });
                      return (
                      <div key={sectionName} style={{ marginBottom: 16 }}>
                        {/* Section header */}
                        <div style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: "0.62rem",
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: activePalette.header,
                          opacity: 0.6,
                          paddingBottom: 6,
                          marginBottom: 4,
                          borderBottom: `1px solid ${activePalette.header}18`,
                        }}>
                          {sectionName}
                        </div>
                        {/* Items in section */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                          {sorted.map((item, i) => {
                            const isChecked = checkedItems.has(item.display);
                            return (
                              <div
                                key={i}
                                onClick={() => toggleCheckedItem(item.display)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 12,
                                  padding: "10px 12px",
                                  background: isChecked ? "rgba(0,0,0,0.03)" : "#FDFAF4",
                                  border: "1px solid",
                                  borderColor: isChecked ? "rgba(0,0,0,0.06)" : `rgba(${parseInt(activePalette.header.slice(1,3),16)},${parseInt(activePalette.header.slice(3,5),16)},${parseInt(activePalette.header.slice(5,7),16)},0.15)`,
                                  cursor: "pointer",
                                  transition: "all 0.15s",
                                }}>
                                <div style={{
                                  width: 18, height: 18,
                                  border: `2px solid`,
                                  borderColor: isChecked ? activePalette.header : "rgba(0,0,0,0.2)",
                                  background: isChecked ? activePalette.header : "transparent",
                                  flexShrink: 0,
                                  display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                  {isChecked && <span style={{ color: activePalette.accent, fontSize: "0.7rem", lineHeight: 1, fontWeight: 700 }}>✓</span>}
                                </div>
                                <span style={{
                                  fontFamily: "'Lato', sans-serif",
                                  fontSize: "0.9rem",
                                  color: isChecked ? "#bbb" : "#333",
                                  textDecoration: isChecked ? "line-through" : "none",
                                  flex: 1,
                                  textTransform: "capitalize",
                                  transition: "all 0.15s",
                                }}>
                                  {item.display}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      );
                    });
                  })()}
                </div>

                {/* Clear checked button */}
                {checkedItems.size > 0 && (
                  <button
                    onClick={() => setCheckedItems(new Set())}
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "0.6rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "7px 14px",
                      border: `1.5px solid rgba(0,0,0,0.2)`,
                      background: "transparent",
                      color: "#888",
                      cursor: "pointer",
                      marginBottom: 10,
                    }}>
                    ✓ Clear Checked Items
                  </button>
                )}

                {/* Clear all button */}
                <button
                  onClick={() => { setCart(new Set()); setCheckedItems(new Set()); }}
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "7px 14px",
                    border: `1.5px solid ${activePalette.header}`,
                    background: "transparent",
                    color: activePalette.header,
                    cursor: "pointer",
                    marginLeft: 8,
                    opacity: 0.6,
                  }}>
                  🗑 Clear All
                </button>
              </div>
            );
          }

          // Empty state
          if (specialTab && specialTab !== "all" && specialTab !== "presidents" && specialTab !== "cart" && specialTab !== "about" && specialTab !== "gallery" && displayList.length === 0 && !search) {
            const msg = emptyMessages[specialTab];
            return (
              <div style={{ textAlign: "center", padding: "50px 20px" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>{msg?.icon}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#777", marginBottom: 6 }}>{msg?.text}</div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "#aaa" }}>{msg?.sub}</div>
              </div>
            );
          }

          // Special tabs / search — flat list
          if ((specialTab && specialTab !== "gallery") || search) {
            return (
              <div>
                {displayList.map((r, i) => {
                  const cardDec = decades.find(d => d.id === r.decade) || dec;
                  return renderCard(r, i, cardDec);
                })}
              </div>
            );
          }

          // Decade view
          const decPres = [
            ...(presidents["pre-1910s"] && activeDec === "1910s" ? presidents["pre-1910s"].map(p => ({ ...p, decade: "pre-1910s", isPresident: true })) : []),
            ...(presidents[activeDec] || []).map(p => ({ ...p, decade: activeDec, isPresident: true }))
          ];

          const filteredRecipes = filter && filter !== "All"
            ? decRecipes.filter(r => r.type === filter)
            : decRecipes;

          return (
            <div>
              {filteredRecipes.map((r, i) => renderCard(r, i, dec))}

              {decPres.length > 0 && filter === "All" && (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "22px 0 14px" }}>
                    <div style={{ flex: 1, height: 1, background: activePalette.header, opacity: 0.15 }} />
                    <div style={{ height: 5, width: 5, background: activePalette.accent, transform: "rotate(45deg)", opacity: 0.6 }} />
                    <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: activePalette.header, opacity: 0.5 }}>
                      🇺🇸 {activeDec === "1910s" ? "Presidents of the Era" : `Presidents of the ${activeDec}`}
                    </span>
                    <div style={{ height: 5, width: 5, background: activePalette.accent, transform: "rotate(45deg)", opacity: 0.6 }} />
                    <div style={{ flex: 1, height: 1, background: activePalette.header, opacity: 0.15 }} />
                  </div>
                  {decPres.map((p, i) => renderCard(p, i + 1000, dec))}
                </>
              )}
            </div>
          );
        })()}
      </div>

      {/* ═══ FOOTER ═══ */}
      <div style={{ background: activePalette.header, padding: "14px 20px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8, opacity: 0.35 }}>
          <div style={{ height: 1, width: 30, background: activePalette.accent }} />
          <div style={{ height: 5, width: 5, background: activePalette.accent, transform: "rotate(45deg)" }} />
          <div style={{ height: 1, width: 30, background: activePalette.accent }} />
        </div>
        <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,232,213,0.25)" }}>
          {allRecipes.length} Recipes · {new Set(allPresidents.map(p => p.presidentName)).size} Presidents · 7 Decades · 1910–1979
        </div>
      </div>

      {copied && <div className="copied-toast">✦ Copied to clipboard</div>}
    </div>
  );
}
