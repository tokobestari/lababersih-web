import { defineField, defineType } from "sanity";

export const tutorial = defineType({
  name: "tutorial",
  title: "Tutorial",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Judul",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi Singkat",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "thumbnail",
      title: "Gambar Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Memulai", value: "memulai" },
          { title: "Pesanan", value: "pesanan" },
          { title: "Keuangan", value: "keuangan" },
          { title: "Inventori", value: "inventori" },
          { title: "RTS", value: "rts" },
          { title: "Laporan", value: "laporan" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Urutan",
      type: "number",
      description: "Urutan tampil (angka kecil = tampil duluan)",
    }),
    defineField({
      name: "body",
      title: "Konten",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Code", value: "code" },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Tanggal Publish",
      type: "datetime",
    }),
  ],
  orderings: [
    {
      title: "Urutan",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "thumbnail",
    },
    prepare({ title, category, media }) {
      return {
        title,
        subtitle: category,
        media,
      };
    },
  },
});
