import AppTask1 from './Task1-2/Task1-2';
import AppTask3 from './Task3/Task3';
import { DataProviderWrap } from './context/DataProvider';

const AppToRender = () => {
    return (
        <div>
            <DataProviderWrap>
                <AppTask1 />
            </DataProviderWrap>
            <AppTask3 />
        </div>
    )
}

export default AppToRender;