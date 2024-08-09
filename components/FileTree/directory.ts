export type Directory = {
  path: string;
  name: string;
  subfolders?: Directory[];
};

const directories: Array<Directory> = [
  {
    path: '/app',
    name: 'app',
    subfolders: [
      {
        path: '/app/products',
        name: 'products',
        subfolders: [
          {
            path: '/app/products/[id]',
            name: '[id]',
            subfolders: [
              {
                path: '/app/products/[id]/page.tsx',
                name: 'page.tsx',
              },
            ],
          },
          {
            path: '/app/products/page.tsx',
            name: 'page.tsx',
          },
        ],
      },
      {
        path: '/app/page.tsx',
        name: 'page.tsx',
      },
      {
        path: '/app/layout.tsx',
        name: 'layout.tsx',
      },
    ],
  },
  {
    path: '/components',
    name: 'components',
    subfolders: [
      {
        path: '/components/features',
        name: 'features',
        subfolders: [
          {
            path: '/components/features/products',
            name: 'products',
            subfolders: [
              {
                path: '/components/features/products/product-table.tsx',
                name: 'product-table.tsx',
              },
              {
                path: '/components/features/products/product-form.tsx',
                name: 'product-form.tsx',
              },
              {
                path: '/components/features/products/product-actions.tsx',
                name: 'product-actions.tsx',
              },
              {
                path: '/components/features/products/product-image.tsx',
                name: 'product-image.tsx',
              },
            ],
          },
        ],
      },
      {
        path: '/components/ui',
        name: 'ui',
        subfolders: [
          {
            path: '/components/ui/data-table',
            name: 'data-table',
            subfolders: [
              {
                path: '/components/ui/data-table/columns.tsx',
                name: 'columns.tsx',
              },
              {
                path: '/components/ui/data-table/row.tsx',
                name: 'row.tsx',
              },
            ],
          },
          {
            path: '/components/ui/button.tsx',
            name: 'button.tsx',
          },
          {
            path: '/components/ui/input.tsx',
            name: 'input.tsx',
          },
          {
            path: '/components/ui/label.tsx',
            name: 'label.tsx',
          },
          {
            path: '/components/ui/textarea.tsx',
            name: 'textarea.tsx',
          },
        ],
      },
      {
        path: '/components/shared',
        name: 'shared',
        subfolders: [
          {
            path: '/components/shared/header.tsx',
            name: 'header.tsx',
          },
          {
            path: '/components/shared/footer.tsx',
            name: 'footer.tsx',
          },
          {
            path: '/components/shared/user-menu.tsx',
            name: 'user-menu.tsx',
          },
        ],
      },
    ],
  },
  {
    path: '/hooks',
    name: 'hooks',
    subfolders: [
      {
        path: '/hooks/use-toast.tsx',
        name: 'use-toast.tsx',
      },
      {
        path: '/hooks/use-location.tsx',
        name: 'use-location.tsx',
      },
    ],
  },
  {
    path: '/data.json',
    name: 'data.json',
  },
  {
    path: '/package.json',
    name: 'package.json',
  },
  {
    path: '/.eslintrc.json',
    name: '.eslintrc.json',
  },
  {
    path: '/tailwind.config.js',
    name: 'tailwind.config.js',
  },
];

export function getDirectories() {
  return directories;
}
