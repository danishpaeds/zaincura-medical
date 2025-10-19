# Blog Posts Management Guide

## Overview

Each blog post is now stored as an individual JSON file in the `data/blog-posts/` directory. This makes it easier to add, edit, and manage blog content.

## File Structure

```
data/
├── blog-posts/
│   ├── README.md (this file)
│   ├── post-slug-1.json
│   ├── post-slug-2.json
│   └── ...
```

## Adding a New Blog Post

### Step 1: Create a New JSON File

Create a new file in `data/blog-posts/` with a URL-friendly filename (e.g., `my-new-blog-post.json`)

### Step 2: Copy This Template

```json
{
  "id": "",
  "title": "Your Blog Post Title",
  "slug": "your-blog-post-slug",
  "excerpt": "A brief summary of your blog post (150-200 characters). This appears in blog listings and meta descriptions.",
  "content": "# Your Main Heading\n\nYour blog content goes here in Markdown format.\n\n## Section Heading\n\nParagraph text with **bold** and *italic* formatting.\n\n### Subsection\n\n- Bullet point 1\n- Bullet point 2\n- Bullet point 3\n\n## Another Section\n\nMore content here...",
  "featuredImage": "",
  "category": "Health Tips",
  "tags": ["tag1", "tag2", "tag3"],
  "metaTitle": "SEO Title | Zain Cura Medical Center",
  "metaDescription": "SEO meta description (150-160 characters) for search engines.",
  "author": "Dr. Name",
  "publishedAt": "2025-10-18T10:00:00.000Z",
  "updatedAt": "2025-10-18T10:00:00.000Z",
  "status": "published",
  "readingTime": 5
}
```

### Step 3: Fill in the Fields

#### Required Fields:

- **id**: Leave empty (`""`), it will be auto-generated. Or use `Date.now().toString()` for a unique ID
- **title**: The main title of your blog post
- **slug**: URL-friendly version (e.g., "understanding-diabetes-management")
- **excerpt**: Brief summary (150-200 characters)
- **content**: Full blog content in Markdown format
- **category**: Choose from available categories (see below)
- **tags**: Array of relevant keywords
- **metaTitle**: SEO title for search engines
- **metaDescription**: SEO description (150-160 characters)
- **author**: Author name (e.g., "Dr. Zain Cura")
- **publishedAt**: ISO date string (e.g., "2025-10-18T10:00:00.000Z")
- **updatedAt**: ISO date string (same as publishedAt for new posts)
- **status**: Either "published" or "draft"
- **readingTime**: Estimated reading time in minutes

#### Optional Fields:

- **featuredImage**: URL to a featured image (leave empty `""` if none)

### Available Categories:

- Health Tips
- Medical News
- Preventive Care
- Mental Wellness
- Medical Technology
- Nutrition
- Wellness
- Sexual Health
- Women's Health
- Laboratory
- Home Care

## Markdown Formatting Guide

### Headings

```markdown
# Main Heading (H1)
## Section Heading (H2)
### Subsection (H3)
#### Subsubsection (H4)
```

### Text Formatting

```markdown
**Bold text**
*Italic text*
***Bold and italic***
```

### Lists

**Unordered Lists:**
```markdown
- Item 1
- Item 2
- Item 3
```

**Ordered Lists:**
```markdown
1. First item
2. Second item
3. Third item
```

**Nested Lists:**
```markdown
- Main item
  - Sub-item 1
  - Sub-item 2
- Another main item
```

### Links

```markdown
[Link text](https://example.com)
[Zain Cura Website](https://www.zaincura.com)
```

### Images

```markdown
![Alt text](https://example.com/image.jpg)
```

### Blockquotes

```markdown
> This is a blockquote
> It can span multiple lines
```

### Code

**Inline code:**
```markdown
Use `inline code` for short snippets
```

**Code blocks:**
````markdown
```
Code block for longer code samples
```
````

### Horizontal Rule

```markdown
---
```

### Tables

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

## Content Writing Best Practices

### 1. Structure Your Content

- Start with an engaging introduction
- Use clear headings to organize sections
- Keep paragraphs short (3-5 sentences)
- Use bullet points for lists
- End with a strong conclusion

### 2. SEO Optimization

- Include target keywords naturally in title and content
- Write descriptive meta titles (50-60 characters)
- Create compelling meta descriptions (150-160 characters)
- Use relevant tags (5-7 tags per post)
- Include internal links to other pages/posts

### 3. Readability

- Use simple, clear language
- Avoid medical jargon when possible
- Define technical terms when necessary
- Use active voice
- Include examples and practical advice

### 4. Length Guidelines

- Health Tips: 800-1,200 words
- Educational Articles: 1,200-1,800 words
- In-depth Guides: 1,800-2,500 words
- News Updates: 500-800 words

## Example Content Structure

```markdown
# Article Title

Introduction paragraph that hooks the reader and explains what they'll learn.

## Understanding the Topic

Brief overview of the main subject.

### Key Points

- Point 1: Explanation
- Point 2: Explanation
- Point 3: Explanation

## Main Section 1

Detailed information about the first major topic.

### Subsection A

Specific details, examples, or instructions.

### Subsection B

More specific information.

## Main Section 2

Detailed information about the second major topic.

### Important Considerations

- Important point 1
- Important point 2
- Important point 3

## When to Seek Medical Help

List of symptoms or situations requiring professional attention.

## Conclusion

Summary of key takeaways and call to action.

**Ready to take the next step?** Contact Zain Cura Medical Center for personalized care.
```

## Publishing Workflow

### Draft Posts

Set `"status": "draft"` to hide posts from public view while working on them.

### Published Posts

Set `"status": "published"` to make posts visible on the website.

### Updating Posts

1. Edit the JSON file
2. Update the `"updatedAt"` field with current date/time
3. Save the file
4. Changes will appear automatically

## File Naming Convention

Use lowercase letters, numbers, and hyphens only:

✅ Good:
- `understanding-diabetes-management.json`
- `5-health-tips-for-dubai.json`
- `covid-19-vaccine-guide-2024.json`

❌ Bad:
- `Understanding Diabetes Management.json`
- `5 Health Tips for Dubai.json`
- `COVID_19_Vaccine_Guide_2024.json`

## Tips for Success

1. **Be Consistent**: Use the same tone and style across all posts
2. **Fact-Check**: Ensure all medical information is accurate
3. **Add Value**: Provide actionable advice, not just information
4. **Use Visuals**: Include images when possible (featuredImage field)
5. **Update Regularly**: Keep content current and relevant
6. **Track Performance**: Monitor which posts perform best
7. **Engage Readers**: End with clear calls to action

## Need Help?

If you have questions about adding or editing blog posts, contact the technical team.

---

**Last Updated**: October 2025
