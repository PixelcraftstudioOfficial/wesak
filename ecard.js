function generateCard() {
    const name = document.getElementById("userNameInput").value;
    
    if(name.trim() === "") {
        alert("කරුණාකර ඔබේ නම ඇතුලත් කරන්න!");
        return;
    }

    const canvas = document.getElementById("ecardCanvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    
    img.src = "assets/ecard-bg.jpg"; 
    
    img.onerror = function() {
        alert("අවුලක්! assets ෆෝල්ඩර් එකේ 'ecard-bg.jpg' පින්තූරය හොයාගන්න නෑ.");
    };

    img.onload = function() {
        // 1. පින්තූරයේ ඔරිජිනල් රෙසලූෂන් එකටම Canvas එක සකස් කිරීම
        canvas.width = img.width;
        canvas.height = img.height;

        // පින්තූරය Canvas එකට අඳින්න
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // පින්තූරයේ පළල අනුව අකුරු වල සයිස් එක Auto ගැලපෙන්න හැදීම
        let titleSize = Math.floor(canvas.width * 0.055); // ප්‍රධාන මාතෘකාවට 5.5% ක සයිස් එකක්
        let nameSize = Math.floor(canvas.width * 0.045);  // නමට 4.5% ක සයිස් එකක්
        let subSize = Math.floor(canvas.width * 0.025);   // 'විසිනි' කෑල්ලට 2.5% ක සයිස් එකක්

        ctx.textAlign = "center";
        
        // අකුරු වලට පස්සෙන් පොඩි කළු පාට Shadow එකක් (කැපිලා පේන්න)
        ctx.shadowColor = "rgba(0, 0, 0, 0.9)";
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 4;
        ctx.shadowOffsetY = 4;
        
        // 1. "සුභ වෙසක් මංගල්‍යක් වේවා...!" (උඩින්ම)
        ctx.font = `bold ${titleSize}px sans-serif`;
        ctx.fillStyle = "#ffd700"; // රන්වන් පාට
        // Y අගය පින්තූරයේ උසෙන් 15% කින් පල්ලෙහාට
        ctx.fillText("සුභ වෙසක් මංගල්‍යක් වේවා...!", canvas.width / 2, canvas.height * 0.15); 
        
        // 2. ඇතුලත් කරපු නම (ඊට යටින්)
        ctx.font = `bold ${nameSize}px sans-serif`;
        ctx.fillStyle = "#ffffff"; // සුදු පාට
        // Y අගය පින්තූරයේ උසෙන් 25% කින් පල්ලෙහාට
        ctx.fillText(name, canvas.width / 2, canvas.height * 0.25); 

        // 3. "විසිනි" (නමට යටින්)
        ctx.font = `${subSize}px sans-serif`;
        ctx.fillStyle = "#cccccc"; // ලා අළු පාට
        // Y අගය පින්තූරයේ උසෙන් 32% කින් පල්ලෙහාට
        ctx.fillText("විසිනි", canvas.width / 2, canvas.height * 0.32); 

        // Canvas එක පේන්න සලස්වන්න
        document.getElementById("canvas-container").style.display = "block";
        
        try {
            const downloadBtn = document.getElementById("downloadBtn");
            // Quality එක 1.0 දීලා උපරිම High Quality එකෙන් සේව් වෙන්න හැදුවා
            downloadBtn.href = canvas.toDataURL("image/jpeg", 1.0);
            downloadBtn.download = "Vesak_Wish_From_" + name + ".jpg";
        } catch (error) {
            console.error(error);
            alert("අවුලක්! Browser Security (CORS) හේතුවක් නිසා පින්තූරය Download කරන්න බෑ. කරුණාකර VS Code හි 'Live Server' හරහා වෙබ්සයිට් එක Run කරන්න.");
        }
    };
}