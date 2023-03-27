/*
 *
 * HomePage
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import {
  Avatar,
  BaseCheckbox,
  BaseHeaderLayout,
  Box,
  Breadcrumbs,
  Crumb,
  Flex,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Typography,
  VisuallyHidden,
} from "@strapi/design-system";
import { Pencil, Trash } from "@strapi/icons";

const HomePage = () => {
  const ROW_COUNT = 6;
  const COL_COUNT = 10;
  const entry = {
    cover: "https://avatars.githubusercontent.com/u/3874873?v=4",
    description: "Chez Léon is a human sized Parisian",
    category: "French cuisine",
    contact: "juan Manuel Puhl",
  };
  const entries = [];
  for (let i = 0; i < 5; i++) {
    entries.push({
      ...entry,
      id: i,
    });
  }

  return (
    <Box background="neutral100">
      <BaseHeaderLayout
        title="Formularios de contacto"
        subtitle={
          <Breadcrumbs label="folders">
            <Crumb>Animals</Crumb>
            <Crumb>Cats</Crumb>
          </Breadcrumbs>
        }
        as="h2"
      />
      <Box padding={8}>
        <Table colCount={COL_COUNT} rowCount={ROW_COUNT}>
          <Thead>
            <Tr>
              <Th>
                <BaseCheckbox aria-label="Select all entries" />
              </Th>
              <Th>
                <Typography variant="sigma">ID</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">Cover</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">Description</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">Categories</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">Contact</Typography>
              </Th>
              <Th>
                <VisuallyHidden>Actions</VisuallyHidden>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {entries.map((entry) => (
              <Tr key={entry.id}>
                <Td>
                  <BaseCheckbox aria-label={`Select ${entry.contact}`} />
                </Td>
                <Td>
                  <Typography textColor="neutral800">{entry.id}</Typography>
                </Td>
                <Td>
                  <Avatar src={entry.cover} alt={entry.contact} />
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {entry.description}
                  </Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {entry.category}
                  </Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {entry.contact}
                  </Typography>
                </Td>
                <Td>
                  <Flex>
                    <IconButton
                      onClick={() => console.log("edit")}
                      label="Edit"
                      noBorder
                      icon={<Pencil />}
                    />
                    <Box paddingLeft={1}>
                      <IconButton
                        onClick={() => console.log("delete")}
                        label="Delete"
                        noBorder
                        icon={<Trash />}
                      />
                    </Box>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default HomePage;
