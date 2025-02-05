import os
import re
import shutil
import yaml
from pathlib import Path

def extract_metadata_and_rewrite(file_path, output_dir):
    print(f"Processing file: {file_path}")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract front matter using regex
    match = re.match(r"---\n(.*?)\n---\n(.*)", content, re.DOTALL)
    if not match:
        print(f"Skipping {file_path}: No front matter found.")
        return
    
    front_matter, body = match.groups()
    metadata = yaml.safe_load(front_matter)
    
    title = metadata.get("title", "Untitled")
    slug = metadata.get("slug", "unknown").lstrip('/')
    
    new_content = f"#{title}\n\n{body}"
    
    output_path = os.path.join(output_dir, f"{slug}.md")
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Saved: {output_path}")

def process_directory(input_dir, output_dir):
    print(f"Scanning directory: {input_dir}")
    for root, _, files in os.walk(input_dir):
        for file in files:
            if file == "index.md":
                file_path = os.path.join(root, file)
                extract_metadata_and_rewrite(file_path, output_dir)
    print("Processing complete.")

if __name__ == "__main__":
    input_directory = "/Users/e.nnajiofor/Studio/Blog/content/posts"  # Change this to your input directory
    output_directory = "/Users/e.nnajiofor/Studio/Blog/content/flat"  # Change this to your output directory
    
    if os.path.exists(output_directory):
        shutil.rmtree(output_directory)
    
    print(f"Starting processing from {input_directory} to {output_directory}")
    process_directory(input_directory, output_directory)
    print("All files processed successfully.")