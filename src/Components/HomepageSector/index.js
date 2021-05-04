import { SectorName, Icon, Main } from './Style';

const HomepageSector = ({
  sector,
}) => (
  <Main>
    <SectorName>
      {sector}
    </SectorName>
    <Icon />
  </Main>
);

export default HomepageSector;
