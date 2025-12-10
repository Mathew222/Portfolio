from PIL import Image
import os

input_path = "public/profile.jpg"
output_path = "public/profile.png"

try:
    if os.path.exists(input_path):
        img = Image.open(input_path)
        print(f"Restored source mode: {img.mode}") # Expect RGBA
        
        # Resize if large
        max_width = 1600
        if img.width > max_width:
            ratio = max_width / img.width
            new_height = int(img.height * ratio)
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
        
        # Quantize if RGBA to save space
        if img.mode == 'RGBA':
            print("Quantizing RGBA image...")
            img = img.quantize(colors=256, method=2)
            
        img.save(output_path, "PNG", optimize=True)
        print(f"Saved transparent PNG to {output_path}")
        
        img.close()
        os.remove(input_path)
        print("Cleaned up jpg source.")
    else:
        print("Source jpg not found!")

except Exception as e:
    print(f"Error: {e}")
