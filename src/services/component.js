import DB from '@/utils/db';

export async function list(spec) {
  return DB.table('component').find(spec);
}

export async function detail(id) {
  return DB.table('component').findOne({_id: id});
}

export async function create(data) {
  return DB.table('component').insert(data);
}

export async function update(id, data) {
  return DB.table('project').update({_id: id}, data);
}
