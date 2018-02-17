import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { sortBy } from 'lodash';
import validateTitle from '../validateTitle';
import ModuleEntry from './ModuleEntry';
import DirectoryEntry from '../';

class DirectoryChildren extends React.Component {
    validateTitle = (id, title) => {
        const { directories, modules } = this.props.store.editor.currentSandbox;
        return !!validateTitle(id, title, [ ...directories, ...modules ]);
    };

    render() {
        const {
            depth = 0,
            renameModule,
            setCurrentModule,
            parentShortid,
            deleteEntry,
            isInProjectView,
            markTabsNotDirty,
            store
        } = this.props;

        const { id: sandboxId, modules, directories, template: sandboxTemplate } = store.editor.currentSandbox;
        const { mainModule, currentModuleShortid, errors, corrections } = store.editor;
        const mainModuleId = mainModule.id;

<<<<<<< HEAD
        return (
            <div>
                {sortBy(directories, 'title')
                    .filter((x) => x.directoryShortid === parentShortid)
                    .map((dir) => (
                        <DirectoryEntry
                            key={dir.id}
                            siblings={[ ...directories, ...modules ]}
                            depth={depth + 1}
                            id={dir.id}
                            shortid={dir.shortid}
                            title={dir.title}
                            sandboxId={sandboxId}
                            sandboxTemplate={sandboxTemplate}
                            mainModuleId={mainModuleId}
                            modules={modules}
                            directories={directories}
                            currentModuleShortid={currentModuleShortid}
                            isInProjectView={isInProjectView}
                            markTabsNotDirty={markTabsNotDirty}
                            errors={errors}
                            corrections={corrections}
                        />
                    ))}
                {sortBy(modules.filter((x) => x.directoryShortid === parentShortid), 'title').map((m) => (
                    <ModuleEntry
                        key={m.id}
                        module={m}
                        depth={depth}
                        setCurrentModule={setCurrentModule}
                        markTabsNotDirty={markTabsNotDirty}
                        renameModule={renameModule}
                        deleteEntry={deleteEntry}
                    />
                ))}
            </div>
        );
    }
=======
          const hasError =
            m && errors.filter(error => error.moduleId === m.id).length;

          return (
            <Entry
              key={m.id}
              id={m.id}
              shortid={m.shortid}
              title={m.title}
              depth={depth + 1}
              active={isActive}
              type={type || 'function'}
              rename={mainModule ? undefined : renameModule}
              openMenu={openMenu}
              deleteEntry={mainModule ? undefined : deleteEntry}
              isNotSynced={
                false /* !this.props.store.editor.isModuleSynced(m.shortid) */
              }
              renameValidator={this.validateTitle}
              setCurrentModule={setCurrentModule}
              isInProjectView={isInProjectView}
              isMainModule={mainModule}
              moduleHasError={hasError}
              markTabsNotDirty={markTabsNotDirty}
            />
          );
        })}
      </div>
    );
  }
>>>>>>> Initial refactor
}

export default inject('store')(observer(DirectoryChildren));
