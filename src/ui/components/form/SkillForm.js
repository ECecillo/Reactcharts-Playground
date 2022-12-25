import { Formik, Form, Field } from 'formik';
import { TextField, FormControl, Select, InputLabel } from '@material-ui/core';

const SkillDropdown = () => (
  <FormControl>
    <Field as={Select} name="dropdownValue" native>
      <option value="">Sélectionnez le niveau de Compétence</option>
      <option value="option1">1 - Notions élementaires</option>
      <option value="option2">2 - Niveau moyen</option>
      <option value="option3">3 - Bon niveau</option>
      <option value="option4">4 - Avancé</option>
      <option value="option5">5 - Expert</option>
    </Field>
  </FormControl>
);

export default function SkillsForm() {
  const initialValues = {
    Redux: 0,
    React: 0,
    Node: 0,
    Meteor: 0,
    Graphql: 0,
    Apollo: 0,
    Jitsi: 0,
    BPMN: 0,
    Emotion: 0,
    Typescript: 0,
    Nextjs: 0,
    Prisma: 0,
    Postgresql: 0,
    Mongodb: 0,
    AWS: 0,
    week: 0,
    dropdownValue: 0,
  };

  const kestioFramework = [
    'Redux',
    'React',
    'Node',
    'Meteor',
    'Graphql',
    'Apollo',
    'Jitsi',
    'BPMN',
    'Emotion',
    'Typescript',
    'Nextjs',
    'Prisma',
    'Postgresql',
    'Mongodb',
    'AWS',
  ];

  const onSubmit = (values, { setSubmitting }) => {
    // Envoyez les données au serveur ou stockez-les dans un tableau local
    setSubmitting(false);
  };

  const generateDropdownAndAssociatedLabel = () =>
    kestioFramework.map((framework) => (
      <>
        <InputLabel
          htmlFor={framework.toLowerCase()}
          style={{
            margin: '1rem',
          }}
        >
          {framework}
        </InputLabel>
        <SkillDropdown name={framework} />
      </>
    ));

  const fieldStyle = (label, { field, form }) => (
    <TextField
      {...field}
      label={label}
      margin="normal"
      error={form.errors.name && form.touched.name}
    />
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.week) {
          errors.name = 'Required';
        } else if (isNaN(values.week)) {
          errors.name = 'Doit être une nombre';
        }
        return errors;
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            type="text"
            name="week"
            placeholder="Saisir le numéro de la Quinzaine"
            render={({ field, form }) =>
              fieldStyle('Week number (0-12)', { field, form })
            }
          />
          {generateDropdownAndAssociatedLabel()}
          <button type="submit" disabled={isSubmitting}>
            Soumettre
          </button>
        </Form>
      )}
    </Formik>
  );
}
